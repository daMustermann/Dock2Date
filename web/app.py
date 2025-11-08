from flask import Flask, render_template, current_app
import logging
from docker.errors import DockerException

app = Flask(__name__)

@app.route('/')
def index():
    containers = []
    docker_clients = current_app.config.get('DOCKER_CLIENTS', {})
    for socket, client in docker_clients.items():
        try:
            containers.extend(client.client.containers.list())
        except DockerException as e:
            logging.exception(f"Error connecting to Docker at {socket}")
            return f"Error connecting to Docker at {socket}. Please contact the administrator."
    return render_template('index.html', containers=containers)
