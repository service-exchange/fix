---
id: heroku
title: Heroku
---

# Deploying Tele-CMS on Heroku

<iframe width="800" height="500" src="https://www.youtube.com/embed/ApDtwE1OXY0" frameborder="0" allowfullscreen width="100%"></iframe>

### Follow the steps below to deploy Tele-CMS on Heroku

1. Click the button below to start one click deployment.
   <div style={{textAlign: 'center'}}>

   [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/service-exchange/fix/tree/main)

   </div>

2. On Heroku tab, you'll be asked to provide an `App name` and `Choose a region`. Enter the name for your deployment and select the region according to your choice.

<div style={{textAlign: 'center'}}>

 <img className="screenshot-full" src="/img/setup/heroku/appname.png" alt="heroku appname" />

</div>

3. Now let's enter the `Config vars` to configure additional [environment variables](/docs/setup/env-vars) that are required for the installation.
   - **LOCKBOX_MASTER_KEY**: Tele-CMS server uses lockbox to encrypt datasource credentials. You should set the environment variable LOCKBOX_MASTER_KEY with a 32 byte hexadecimal string. If you have OpenSSL installed, you can run the command `openssl rand -hex 32` to generate the key.
   - **NODE_ENV**: By default NODE_ENV is set to production.
   - **NODE_OPTIONS**: Node options are configured to increase node memory to support app build.
   - **SECRET_KEY_BASE**: Tele-CMS server uses a secure 64 byte hexadecimal string to encrypt session cookies. You should set the environment variable SECRET_KEY_BASE. If you have OpenSSL installed, you can run the command `openssl rand -hex 64` to generate the key.
   - **TELECMS_HOST**: Public URL of Tele-CMS installation. This is usually `https://<app-name-in-first-step\>.herokuapp.com`.
   - **TELECMS_SERVER_URL**: URL of Tele-CMS server installation. (This is same as the TELECMS_HOST for Heroku deployments)

4. Click on `Deploy app` button at the bottom to initiate the build.

5. After the successful build, you'll see two buttons at the bottom: `Manage App` and `View`. Click on the `View` to open the app or click on `Manage App` to configure any settings.

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/setup/heroku/build.png" alt="heroku build" />

</div>

6. The default username of the admin is `dev@service.exchange` and the password is `password`.

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/setup/heroku/login.png" alt="heroku login" />

</div>

:::tip
The one click deployment will create a **free dyno** and a **free postgresql database**.
:::

:::tip
Tele-CMS server and client can be deployed as standalone applications. If you do not want to deploy the client on Heroku, modify `package.json` accordingly. We have a [guide](/docs/setup/client) on deploying Tele-CMS client using services such as Firebase.
:::
