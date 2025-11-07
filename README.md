
Dock2Date

Automatically update your running Docker containers to the latest available image.

The de-facto standard for docker update automation

Forked from the original at https://github.com/pydock2date/Dock2Date/

## Overview

Dock2Date will monitor (all or specified) running docker containers and update them to the (latest or tagged) available image in the remote registry. The updated container uses the same tag and parameters that were used when the container was first created such as volume/bind mounts, docker network connections, environment variables, restart policies, entrypoints, commands, etc.

- Push your image to your registry and simply wait your defined interval for Dock2Date to find the new image and redeploy your container autonomously.
- Notify you via many platforms courtesy of [Apprise](https://github.com/caronc/apprise) 
- Serve metrics for trend monitoring (Currently: Prometheus/Influxdb)
- Limit your server ssh access
- `ssh -i key server.domainname "docker pull ... && docker run ..."` is for scrubs
- `docker-compose pull && docker-compose up -d` is for fancier scrubs

## Getting Started

More detailed usage and configuration can be found on [the wiki](https://github.com/gmt2001/Dock2Date/wiki).

### Docker

Dock2Date is deployed via docker image like so:

```bash
docker run -d --name Dock2Date \
  -v /var/run/docker.sock:/var/run/docker.sock \
  ghcr.io/gmt2001/Dock2Date
```

> This image is compatible with amd64, arm64, and arm/v7 CPU architectures

or via `docker-compose`:

[Official Example](docker-compose.yml)

## Examples
Per-command and scenario examples can be found in the [wiki](https://github.com/gmt2001/Dock2Date/wiki/Usage)

## Contributing

All contributions are welcome! Contributing guidelines are in the works
