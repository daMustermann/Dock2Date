# Dock2Date

Automatically update your running Docker containers to the latest available image.

The de-facto standard for docker update automation

[![GitHub Release](https://img.shields.io/github/v/release/daMustermann/Dock2Date)](https://github.com/daMustermann/Dock2Date/releases)
[![Docker Pulls](https://img.shields.io/docker/pulls/ghcr.io/gmt2001/Dock2Date)](https://hub.docker.com/r/ghcr.io/gmt2001/Dock2Date)
[![License](https://img.shields.io/github/license/daMustermann/Dock2Date)](https://github.com/daMustermann/Dock2Date/blob/main/LICENSE)

## Overview

Dock2Date monitors running Docker containers and automatically updates them to the latest available image in the remote registry. Updated containers maintain the same configuration as the original (volumes, networks, environment variables, restart policies, etc.).

**The web UI is the primary and recommended way to use Dock2Date** - it provides a beautiful, modern interface for monitoring and configuration.

## Features

- **🖥️ Modern Web UI**: Beautiful dark interface with glassmorphism effects and real-time monitoring
- **🔄 Automated Updates**: Push new images and let Dock2Date handle deployment
- **⚡ Zero Downtime**: Seamless container updates preserving all settings
- **📊 Live Monitoring**: Real-time container status and statistics
- **🔔 Smart Notifications**: 80+ notification services via Apprise
- **📈 Metrics Export**: Prometheus and InfluxDB integration
- **🏷️ Label Control**: Fine-grained control via Docker labels
- **🐳 Swarm Support**: Full Docker Swarm compatibility
- **🔧 Easy Configuration**: Configure everything through the web interface
- **🌍 Multi-Language**: Support for multiple languages
- **⏰ Flexible Scheduling**: Cron or interval-based updates
- **🔒 Private Registries**: Authenticated registry support

## Quick Start

### Docker (Recommended)

```bash
docker run -d --name Dock2Date \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -p 9999:9999 \
  -e WEB=true \
  ghcr.io/gmt2001/Dock2Date
```

**Access the web UI at: http://localhost:9999**

### Docker Compose

```yaml
version: '3'
services:
  dock2date:
    image: ghcr.io/gmt2001/Dock2Date
    environment:
      - WEB=true
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "9999:9999"
    restart: unless-stopped
```

```bash
docker-compose up -d
```

## Web UI

The web UI is the primary interface for Dock2Date, providing:

### 🎨 **Beautiful Dashboard**
- **Real-time Statistics**: Container counts, status, and update information
- **Container Grid**: Visual overview of all containers with status indicators
- **Animated Background**: Modern floating elements with neon accents

### ⚙️ **Complete Configuration**
- **Settings Panel**: Configure all options through an intuitive interface
- **Tabbed Organization**: General, Docker, Notifications, and Metrics settings
- **Live Updates**: Changes take effect immediately
- **Persistent Storage**: All settings saved automatically

### 📊 **Monitoring & Logs**
- **Live Container View**: See all containers with detailed information
- **Real-time Logs**: Monitor application activity
- **Metrics Display**: View Prometheus/InfluxDB data
- **Status Indicators**: Visual container health status

### 🔧 **Easy Management**
- **One-Click Setup**: Configure notifications, monitoring, and updates
- **Filter & Search**: Find containers quickly
- **Bulk Operations**: Manage multiple containers
- **Responsive Design**: Works perfectly on desktop and mobile

## How It Works

1. **Deploy**: Run Dock2Date with web UI enabled
2. **Configure**: Open http://localhost:9999 and set up your preferences
3. **Monitor**: Watch containers update automatically in real-time
4. **Relax**: Dock2Date handles the rest!

## Use Cases

- **Development**: Keep development environments up-to-date
- **Staging**: Automated updates for testing environments
- **Production**: Zero-downtime updates with notifications
- **CI/CD**: Integrate with deployment pipelines
- **Home Lab**: Manage self-hosted services automatically

## Examples

### Basic Monitoring
```bash
# Start with web UI
docker run -d --name Dock2Date \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -p 9999:9999 \
  -e WEB=true \
  ghcr.io/gmt2001/Dock2Date

# Open http://localhost:9999
# Configure monitoring in the web interface
```

### With Notifications
```bash
# Start Dock2Date
docker run -d --name Dock2Date \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -p 9999:9999 \
  -e WEB=true \
  ghcr.io/gmt2001/Dock2Date

# Configure Discord notifications in web UI
# Add webhook URL: discord://your-webhook-url
```

### Swarm Mode
```bash
# For Docker Swarm
docker run -d --name Dock2Date \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -p 9999:9999 \
  -e WEB=true \
  -e SWARM=true \
  ghcr.io/gmt2001/Dock2Date
```

## Architecture

Dock2Date consists of:

- **Core Engine**: Monitors containers and performs updates
- **Web Interface**: Modern Flask-based UI on port 9999
- **Notification System**: Apprise integration for 80+ services
- **Metrics Export**: Prometheus/InfluxDB support
- **Configuration System**: Environment variables + web UI persistence

## Requirements

- Docker 1.10+
- Python 3.6.2+ (when running from source)
- Access to Docker socket or TCP endpoint

## Contributing

We welcome contributions! The web UI makes development and testing easier than ever.

1. Fork the repository
2. Make changes
3. Test with the web UI
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Advanced Configuration

For detailed configuration options, environment variables, command-line usage, and advanced features, see [CONFIGURATION.md](CONFIGURATION.md).

---

**🚀 Start using Dock2Date today with the web UI - it's the easiest way to manage your container updates!**
