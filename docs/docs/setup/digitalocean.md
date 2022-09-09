---
id: digitalocean
title: DigitalOcean
---

# Deploying Tele-CMS on DigitalOcean

Now you can quickly deploy Tele-CMS using the Deploy to DigitalOcean button.

## Deploying

#### Follow the steps below to deploy Tele-CMS on DigitalOcean

1. Click on the button below to start one click deployment

  <div style={{textAlign: 'center'}}>

  [![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/service-exchange/fix/tree/main)

  </div>

2. A new tab will open up, sign-in to your DigitalOCean account. Once signed-in, the **Create App** page will open up and **Resources** will be already selected. Click on **Next** button.

  <img className="screenshot-full" src="/img/setup/digitalocean/resources.png" alt="Tele-CMS - Deploy on DigitalOcean - Resources" />

3. Now, on **Environment Variables** page you can add new variables or edit the existing ones. Check the [environment variables here](/docs/setup/env-vars).

  <img className="screenshot-full" src="/img/setup/digitalocean/env.png" alt="Tele-CMS - Deploy on DigitalOcean - Environment Variables" />

4. On the next page, you can change the **App name**, **Project**, and the **Region**.

  <img className="screenshot-full" src="/img/setup/digitalocean/region.png" alt="Tele-CMS - Deploy on DigitalOcean - App name" />

5. On the last page, you'll be asked to **Review** all the app details such that we entered before such as **Resources**, **Environment Variables**, **Region**, and there will also be **Billing** section at the end. Review all the details and click the **Create Resource** button.

   <img className="screenshot-full" src="/img/setup/digitalocean/review.png" alt="Tele-CMS - Deploy on DigitalOcean - App name" />

6. Once you click the **Create Resource** button, the build will begin. Once the build is complete, you'll see the resource and a **URL** next to it. Click on the URL to open the deployed **Tele-CMS**.

:::tip
Tele-CMS server and client can be deployed as standalone applications. If you do not want to deploy the client on DigitalOcean, modify `package.json` accordingly. We have a [guide](/docs/setup/client) on deploying Tele-CMS client using services such as Firebase.
:::
