---
id: docker-local
title: Try Tele-CMS locally
---

# Try Tele-CMS with Docker

:::info
This doc is not for setting up the development environment, it is only for trying out Tele-CMS locally using Docker. Check out [Contributing Guide](/docs/category/contributing-guide).
:::

You can run the command below to have Tele-CMS up and running right away.

```bash
docker run \
  --name telecms \
  --restart unless-stopped \
  -p 3000:3000 \
  -v telecms_data:/var/lib/postgresql/13/main \
  telecms/try:latest
```

## Setup information

- Runs the Tele-CMS server on the port 3000 on your machine.
- Container has postgres already configured within. All the data will be available in the docker volume `telecms_data`.
- Default user credentials to login (email: `dev@service.exchange`, password: `password`).
- You can make use of `--env` or `--env-file` flag to test against various env configurables mentioned [here](https://docs.service.exchange/docs/setup/env-vars).
- Use `docker stop telecms` to stop the container and `docker start telecms` to start the container thereafter.
