---
id: try-telecms
title: Try Tele-CMS
---

# Try Tele-CMS

## On local with Docker

You can run the command below to have Tele-CMS up and running right away.

```bash
docker run \
  --name telecms \
  --restart unless-stopped \
  -p 3000:3000 \
  -v telecms_data:/var/lib/postgresql/13/main \
  telecms/try:latest
```

#### Setup information

- Runs the Tele-CMS server on the port 3000 on your machine.
- Container has postgres already configured within. All the data will be available in the docker volume `telecms_data`.
- Default user credentials to login (email: `dev@service.exchange`, password: `password`).
- You can make use of `--env` or `--env-file` flag to test against various env configurable mentioned [here](https://docs.service.exchange/docs/setup/env-vars).
- Use `docker stop telecms` to stop the container and `docker start telecms` to start the container thereafter.

## On Play with docker

You can deploy Tele-CMS on PWD for free with the one-click-deployment button below.

  <a href="https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/service-exchange/fix/main/deploy/docker/play-with-docker.yml">
    <img src="https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png" alt="Try in PWD" height="32"/>
  </a>

#### Setup information

- Default user credentials to login (email: `dev@service.exchange`, password: `password`).
- Open port 3000 after the docker containers are up and running
- Visit the url shared on the dashboard to try out telecms
