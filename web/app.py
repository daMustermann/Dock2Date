from flask import Flask, render_template, request, jsonify, current_app
import logging
import json
import os
from docker.errors import DockerException
from pydock2date.config import Config
from pydock2date.dataexporters import DataManager
from pydock2date.notifiers import NotificationManager

app = Flask(__name__)

# Global config storage for web UI
web_config = {}

@app.route('/')
def index():
    """Main dashboard page"""
    try:
        containers = []
        docker_clients = current_app.config.get('DOCKER_CLIENTS', {})
        for socket, client in docker_clients.items():
            try:
                containers.extend(client.client.containers.list())
            except DockerException as e:
                logging.exception(f"Error connecting to Docker at {socket}")
                containers.append({
                    'name': f'Error: {socket}',
                    'image': {'tags': ['']},
                    'status': f'Connection failed: {str(e)}',
                    'error': True
                })

        # Get configuration
        config = current_app.config.get('CONFIG', {})
        data_manager = current_app.config.get('DATA_MANAGER', None)

        # Get metrics data
        metrics = {}
        if data_manager:
            try:
                metrics = data_manager.get_metrics_summary()
            except Exception as e:
                logging.exception("Error getting metrics")
                metrics = {'error': str(e)}

        return render_template('index.html',
                             containers=containers,
                             config=config,
                             metrics=metrics,
                             web_config=web_config)
    except Exception as e:
        logging.exception("Error in index route")
        return f"Error loading dashboard: {str(e)}"

@app.route('/api/config', methods=['GET', 'POST'])
def api_config():
    """API endpoint for configuration management"""
    if request.method == 'POST':
        try:
            data = request.get_json()
            # Update web_config with new settings
            web_config.update(data)
            # Save to file for persistence
            save_web_config()
            return jsonify({'status': 'success', 'message': 'Configuration updated'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)}), 500
    else:
        # Return current configuration
        config = current_app.config.get('CONFIG', {})
        return jsonify({
            'app_config': config,
            'web_config': web_config
        })

@app.route('/api/containers')
def api_containers():
    """API endpoint for container data"""
    try:
        containers = []
        docker_clients = current_app.config.get('DOCKER_CLIENTS', {})
        for socket, client in docker_clients.items():
            try:
                client_containers = client.client.containers.list(all=True)
                for container in client_containers:
                    containers.append({
                        'id': container.id,
                        'name': container.name,
                        'image': container.image.tags[0] if container.image.tags else container.image.id,
                        'status': container.status,
                        'ports': container.ports,
                        'labels': container.labels,
                        'created': container.attrs.get('Created'),
                        'socket': socket
                    })
            except DockerException as e:
                logging.exception(f"Error connecting to Docker at {socket}")
                containers.append({
                    'name': f'Error: {socket}',
                    'status': f'Connection failed: {str(e)}',
                    'error': True
                })
        return jsonify(containers)
    except Exception as e:
        logging.exception("Error in containers API")
        return jsonify({'error': str(e)}), 500

@app.route('/api/metrics')
def api_metrics():
    """API endpoint for metrics data"""
    try:
        data_manager = current_app.config.get('DATA_MANAGER', None)
        if data_manager:
            metrics = data_manager.get_metrics_summary()
            return jsonify(metrics)
        else:
            return jsonify({'error': 'Data manager not available'})
    except Exception as e:
        logging.exception("Error in metrics API")
        return jsonify({'error': str(e)}), 500

@app.route('/api/logs')
def api_logs():
    """API endpoint for application logs"""
    try:
        # This would need to be implemented to read actual logs
        # For now, return a placeholder
        return jsonify({
            'logs': [
                {'timestamp': '2025-11-08 10:00:00', 'level': 'INFO', 'message': 'Dock2Date started'},
                {'timestamp': '2025-11-08 10:05:00', 'level': 'INFO', 'message': 'Checking for container updates'},
            ]
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def save_web_config():
    """Save web configuration to file"""
    try:
        config_dir = os.path.join(os.path.dirname(__file__), '..', 'config')
        os.makedirs(config_dir, exist_ok=True)
        config_file = os.path.join(config_dir, 'web_config.json')
        with open(config_file, 'w') as f:
            json.dump(web_config, f, indent=2)
    except Exception as e:
        logging.exception("Error saving web config")

def load_web_config():
    """Load web configuration from file"""
    try:
        config_file = os.path.join(os.path.dirname(__file__), '..', 'config', 'web_config.json')
        if os.path.exists(config_file):
            with open(config_file, 'r') as f:
                global web_config
                web_config = json.load(f)
    except Exception as e:
        logging.exception("Error loading web config")

# Load web config on startup
load_web_config()
