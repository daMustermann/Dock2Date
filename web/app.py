from flask import Flask, render_template, current_app
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
            return f"Error connecting to Docker at {socket}: {e}"
    return render_template('index.html', containers=containers)
