---
id: google-cloud-run
title: Google Cloud Run
---

# Deploying Tele-CMS on Google Cloud Run

:::info
You should setup a PostgreSQL database manually to be used by Tele-CMS.
:::

Follow the steps below to deploy Tele-CMS on Cloud run with `gcloud` CLI.

## Deploying Tele-CMS application

1. Cloud Run requires prebuilt image to be present within cloud registry. You can pull specific telecms image from docker hub and then tag with your project to push it to cloud registry.

   ```bash
   gcloud auth configure-docker
   docker pull service-exchange/fix-ce:latest
   docker tag service-exchange/fix-ce:latest gcr.io/<replace-your-project-id>/service-exchange/fix-ce:latest
   docker push gcr.io/<replace-your-project-id>/service-exchange/fix-ce:latest
   ```

2. Deploy new cloud run service

:::info
This command takes the assumption that certain required environment has already been created in secrets. If you haven't created already then use the [secret manager](https://console.cloud.google.com/security/secret-manager).
:::

   ```bash
   gcloud run deploy telecms-ce --image gcr.io/<replace-your-project-id>/service-exchange/fix-ce:latest  \
   --allow-unauthenticated \
   --cpu 1 \
   --memory 1Gi \
   --min-instances 1 \
   --set-env-vars "TELECMS_HOST=https://<replace-your-public-host>.com" \
   --set-secrets "PG_HOST=PG_HOST:latest" \
   --set-secrets "PG_DB=PG_DB:latest" \
   --set-secrets "PG_USER=PG_USER:latest" \
   --set-secrets "PG_PASS=PG_PASS:latest" \
   --set-secrets "PG_PORT=PG_PORT:latest" \
   --set-secrets "LOCKBOX_MASTER_KEY=LOCKBOX_MASTER_KEY:latest" \
   --set-secrets "SECRET_KEY_BASE=SECRET_KEY_BASE:latest" \
   --args "npm,run,start:prod"
   ```

Update `TELECMS_HOST` environment variable if you want to use the default url assigned with Cloud run after the initial deploy.

:::tip
If you are to use [Public IP](https://cloud.google.com/sql/docs/mysql/connect-run) for Cloud SQL, then database host connection needs to be done via unix socket. In that case you can set value for `PG_HOST` as `/cloudsql/<CLOUD_SQL_CONNECTION_NAME>`. Additionally you will also have to set these two flags with the above command:

```
   --set-cloudsql-instances <replace-cloud-sql-connection-name> \
   --set-secrets "CLOUD_SQL_CONNECTION_NAME=CLOUD_SQL_CONNECTION_NAME:latest" \
```

:::

3. Create default user (Optional)

Signing up requires [SMTP configuration](https://docs.service.exchange/docs/setup/env-vars#smtp-configuration--optional-) to be done, but if you want to start off with default user you can run the command by modifying the `args` flag for a one time usage.

   ```bash
   gcloud run deploy <replace-service-name> \
   --image gcr.io/<replace-your-project-id>/service-exchange/fix-ce:latest \
   --args "npm,run,--prefix,server,db:seed"
   ```

The deployment will fail as it runs a seed script. Check logs to see that default user was created. Now run the following command to have the app deployed.

   ```bash
   gcloud run deploy <replace-service-name> \
   --image gcr.io/<replace-your-project-id>/service-exchange/fix-ce:latest \
   --args "npm,run,start:prod"
   ```

The default username of the admin is `dev@service.exchange` and the password is `password`.

## Deploying only Tele-CMS server

1. Cloud Run requires prebuilt image to be present within cloud registry. You can pull specific telecms image from docker hub and then tag with you project to push it to cloud registry.

   ```bash
   gcloud auth configure-docker
   docker pull service-exchange/fix-server-ce:latest
   docker tag service-exchange/fix-server-ce:latest gcr.io/<replace-your-project-id>/service-exchange/fix-server-ce:latest
   docker push gcr.io/<replace-your-project-id>/service-exchange/fix-server-ce:latest
   ```

2. Deploy new cloud run service

:::info
This command takes the assumption that certain required environment has already been created in secrets. If you haven't created already then use the [secret manager](https://console.cloud.google.com/security/secret-manager).
:::

   ```bash
   gcloud run deploy telecms-server-ce --image gcr.io/<replace-your-project-id>/service-exchange/fix-server-ce:latest  \
   --allow-unauthenticated \
   --cpu 1 \
   --memory 1Gi \
   --min-instances 1 \
   --set-env-vars "SERVE_CLIENT=false" \
   --set-env-vars "TELECMS_HOST=https://<replace-your-public-host>.com" \
   --set-secrets "PG_HOST=PG_HOST:latest" \
   --set-secrets "PG_DB=PG_DB:latest" \
   --set-secrets "PG_USER=PG_USER:latest" \
   --set-secrets "PG_PASS=PG_PASS:latest" \
   --set-secrets "PG_PORT=PG_PORT:latest" \
   --set-secrets "LOCKBOX_MASTER_KEY=LOCKBOX_MASTER_KEY:latest" \
   --set-secrets "SECRET_KEY_BASE=SECRET_KEY_BASE:latest" \
   --args "npm,run,start:prod"
   ```

:::tip
If you are to use [Public IP](https://cloud.google.com/sql/docs/mysql/connect-run) for Cloud SQL, then database host connection needs to be done via unix socket. In that case you can set value for `PG_HOST` as `/cloudsql/<CLOUD_SQL_CONNECTION_NAME>`. Additionally you will also have to set these two flags with the above command:

```
   --set-cloudsql-instances <replace-cloud-sql-connection-name> \
   --set-secrets "CLOUD_SQL_CONNECTION_NAME=CLOUD_SQL_CONNECTION_NAME:latest" \
```

:::

:::info
  If there are self signed HTTPS endpoints that Tele-CMS needs to connect to, please make sure that `NODE_EXTRA_CA_CERTS` environment variable is set to the absolute path containing the certificates. The certificate can be mount as a volume onto the container using secrets.
:::

3. Create default user **(Optional)**

Signing up requires [SMTP configuration](https://docs.service.exchange/docs/setup/env-vars#smtp-configuration--optional-) to be done, but if you want to start off with default user you can run the command by modifying the `args` flag for a one time usage.

   ```bash
   gcloud run deploy <replace-service-name> \
   --image gcr.io/<replace-your-project-id>/service-exchange/fix-server-ce:latest \
   --args "npm,run,db:seed:prod"
   ```

The deployment will fail as it runs a seed script. Check logs to see that default user was created. Now run the following command to have the app deployed.

   ```bash
   gcloud run deploy <replace-service-name> \
   --image gcr.io/<replace-your-project-id>/service-exchange/fix-server-ce:latest \
   --args "npm,run,start:prod"
   ```

The default username of the admin is `dev@service.exchange` and the password is `password`.
