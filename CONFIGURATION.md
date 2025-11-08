# Dock2Date Configuration Guide

This document contains detailed configuration options for Dock2Date. For basic usage and web UI setup, see the main [README.md](README.md).

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DOCKER_SOCKETS` | `unix://var/run/docker.sock` | Docker socket(s) to connect to |
| `INTERVAL` | `300` | Check interval in seconds between updates |
| `CRON` | - | Cron expression for scheduling (e.g., `"*/5 * * * *"` for every 5 minutes) |
| `GRACE` | `15` | Grace time for late jobs in seconds (-1 for always execute, 0 for never if late) |
| `LOG_LEVEL` | `info` | Logging level (debug, info, warn, error, critical) |
| `TZ` | `UTC` | Timezone for notifications and scheduling |
| `LANGUAGE` | `en` | Language for notifications (en, es, fr, de) |
| `WEB` | `true` | Enable web UI (recommended) |
| `SELF_UPDATE` | `false` | Allow Dock2Date to update itself |
| `RUN_ONCE` | `false` | Run once and exit |
| `DRY_RUN` | `false` | Run without making changes |
| `MONITOR_ONLY` | `false` | Send notifications without updating containers |
| `DOCKER_TLS` | `false` | Enable Docker TLS |
| `DOCKER_TLS_VERIFY` | `true` | Verify TLS certificates |
| `DOCKER_TIMEOUT` | `60` | Docker client timeout in seconds |
| `SWARM` | `false` | Enable Docker Swarm mode |
| `MONITOR` | - | Specific containers to monitor (space-separated) |
| `IGNORE` | `mongo influxdb postgres mariadb` | Containers to ignore (space-separated) |
| `LABEL_ENABLE` | `false` | Enable label-based monitoring |
| `LABELS_ONLY` | `false` | Only monitor containers with labels |
| `CLEANUP` | `false` | Remove old images after updates |
| `LATEST_ONLY` | `false` | Always update to :latest tag |
| `REPO_USER` | - | Private registry username |
| `REPO_PASS` | - | Private registry password |
| `NOTIFIERS` | - | Apprise notification URLs (space-separated) |
| `DATA_EXPORT` | - | Metrics export type (prometheus/influxdb) |
| `PROMETHEUS_ADDR` | `127.0.0.1` | Prometheus bind address |
| `PROMETHEUS_PORT` | `8000` | Prometheus port |
| `INFLUX_URL` | `127.0.0.1` | InfluxDB URL |
| `INFLUX_PORT` | `8086` | InfluxDB port |
| `INFLUX_USERNAME` | `root` | InfluxDB username |
| `INFLUX_PASSWORD` | `root` | InfluxDB password |
| `INFLUX_DATABASE` | - | InfluxDB database name |
| `INFLUX_SSL` | `false` | Use SSL for InfluxDB |
| `INFLUX_VERIFY_SSL` | `true` | Verify InfluxDB SSL certificate |
| `SAVE_COUNTERS` | `false` | Save update counters across restarts |
| `SKIP_STARTUP_NOTIFICATIONS` | `false` | Skip notifications on startup |

## Docker Labels

Control update behavior using Docker labels on your containers:

| Label | Value | Description |
|-------|-------|-------------|
| `dock2date.enable` | `true` | Enable updates for this container |
| `dock2date.disable` | `true` | Disable updates for this container |
| `dock2date.onlyTagged` | `true` | Only update tagged versions, not latest |
| `dock2date.monitorOnly` | `true` | Monitor only, don't update |

## Command Line Options

Dock2Date supports all environment variables as command-line arguments. Run `dock2date --help` for complete list.

Common examples:

```bash
# Basic usage with web UI
dock2date -w

# Monitor specific containers
dock2date -m nginx mysql -w

# Use cron scheduling
dock2date -C "0 */6 * * *" -w

# Dry run mode
dock2date -A -o -w

# Swarm mode
dock2date -S -w
```

## Notification Services

Dock2Date uses [Apprise](https://github.com/caronc/apprise) for notifications. Examples:

### Discord
```
discord://123456789012345678/abcdefghijklmnop
```

### Slack
```
slack://xoxb-your-token/channel
```

### Email
```
mailto://user:pass@gmail.com
```

### Telegram
```
tgram://bot_token/chat_id
```

### Multiple Services
```
discord://... slack://... mailto://...
```

## Metrics Export

### Prometheus

Enable with `DATA_EXPORT=prometheus`:

```bash
dock2date -D prometheus -a 0.0.0.0 -p 8000 -w
```

Available metrics:
- `dock2date_containers_total` - Total containers monitored
- `dock2date_containers_updated_total` - Total containers updated
- `dock2date_update_duration_seconds` - Update duration

### InfluxDB

Enable with `DATA_EXPORT=influxdb`:

```bash
dock2date -D influxdb -I influxdb:8086 -U user -x password -X database -w
```

## Hooks System

Dock2Date supports custom hooks for pre/post update actions. Place executable scripts in `/app/pydock2date/hooks/`:

- `pre-update.sh` - Executed before updating a container
- `post-update.sh` - Executed after updating a container

Example hook script:

```bash
#!/bin/bash
# pre-update.sh
echo "Starting update for container: $CONTAINER_NAME"
# Your custom logic here
```

## Private Registries

For private Docker registries:

```bash
dock2date -r myuser -R mypassword -w
```

## TLS Configuration

For secure Docker connections:

```bash
dock2date -t -T -d tcp://docker-host:2376 -w
```

Mount certificates to `/etc/docker/certs.d/` or use Docker's default certificate paths.

## Advanced Scheduling

### Cron Expressions

Examples:
- `"*/5 * * * *"` - Every 5 minutes
- `"0 */1 * * *"` - Every hour
- `"0 2 * * *"` - Daily at 2 AM
- `"0 0 * * 1"` - Weekly on Mondays

### Timezone Support

Set timezone for cron jobs and notifications:

```bash
dock2date -tz America/New_York -w
dock2date -tz Europe/London -w
dock2date -tz Asia/Tokyo -w
```

## Docker Compose Examples

### Basic Setup
```yaml
version: '3'
services:
  dock2date:
    image: ghcr.io/daMustermann/Dock2Date
    environment:
      - WEB=true
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - "9999:9999"
    restart: unless-stopped
```

### Advanced Setup
```yaml
version: '3'
services:
  dock2date:
    image: ghcr.io/daMustermann/Dock2Date
    environment:
      - WEB=true
      - INTERVAL=600
      - CLEANUP=true
      - SELF_UPDATE=true
      - NOTIFIERS=discord://your-webhook-url
      - DATA_EXPORT=prometheus
      - TZ=America/New_York
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./hooks:/app/pydock2date/hooks
    ports:
      - "9999:9999"
      - "8000:8000"  # Prometheus metrics
    restart: unless-stopped
```

## Troubleshooting

### Common Issues

1. **Permission denied on Docker socket**
   - Ensure user has access to `/var/run/docker.sock`
   - Or run as root (not recommended)

2. **Web UI not accessible**
   - Check if port 9999 is exposed and not blocked by firewall
   - Verify `WEB=true` is set

3. **Containers not updating**
   - Check container logs for errors
   - Verify image tags exist in registry
   - Check network connectivity to registry

4. **Notifications not working**
   - Test Apprise URLs independently
   - Check network connectivity
   - Verify URL format

### Debug Mode

Enable debug logging:

```bash
dock2date -l debug -w
```

### Logs Location

- Container logs: `docker logs dock2date`
- Application logs: Available in web UI or configured log file

## Security Considerations

1. **Docker Socket Access**: Mounting `/var/run/docker.sock` gives full Docker access
2. **Network Security**: Expose only necessary ports (9999 for web UI)
3. **Registry Credentials**: Store credentials securely, not in plain text
4. **TLS**: Use TLS for remote Docker connections
5. **Firewall**: Restrict access to web UI and metrics ports

## Performance Tuning

- **Interval**: Balance between update frequency and system load
- **Timeout**: Adjust Docker timeout based on network speed
- **Cleanup**: Enable to save disk space
- **Monitoring**: Use labels to reduce processing overhead

## Migration from Environment Variables

When moving from env vars to web UI configuration:

1. Start with `WEB=true`
2. Access web UI at `http://localhost:9999`
3. Go to Settings → Configure all options
4. Remove environment variables from docker-compose.yml
5. Restart container

The web UI will persist all settings automatically.