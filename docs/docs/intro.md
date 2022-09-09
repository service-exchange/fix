---
id: introduction
title: Introduction
description: Tele-CMS is an **Modern CMS for Healthcare Services** to build and deploy custom internal tools. Tele-CMS can connect to your data sources such as databases ( PostgreSQL, MongoDB, MS SQL Server, Snowflake, , BigQuery, etc ), API/GraphQL endpoints, SaaS tools ( Airtable, Stripe, Google Sheets, etc ) and cloud object storage services ( AWS S3, Google Cloud Storage and Minio ). Once the data sources are connected, Tele-CMS can run queries on these data sources to fetch and update data. The data fetched from data sources can be visualised and modified using the UI widgets such as tables, charts, forms, etc.
slug: /
---

# Introduction

Tele-CMS is an **Modern CMS for Healthcare Services** to build and deploy custom internal tools. Tele-CMS can connect to your data sources such as databases ( PostgreSQL, MongoDB, MS SQL Server, Snowflake, , BigQuery, etc ), API/GraphQL endpoints, SaaS tools ( Airtable, Stripe, Google Sheets, etc ) and cloud object storage services ( AWS S3, Google Cloud Storage and Minio ). Once the data sources are connected, Tele-CMS can run queries on these data sources to fetch and update data. The data fetched from data sources can be visualised and modified using the UI widgets such as tables, charts, forms, etc.

<img className="screenshot-full" src="/img/introduction/githubstar.png" alt="github star"/>

## How Tele-CMS works

<div style={{textAlign: 'center'}}>

![Tele-CMS - List view widget](/img/introduction/how-it-works.png)

</div>

**Tele-CMS has just 3 fundamental principles for building apps:**

- **Connect to data sources:** Connect to your existing data sources such as PostgreSQL, MySQL, Firestore, Stripe, Google Sheets, API endpoints, etc.
- **Build queries:** Tele-CMS comes with query builders for all supported data sources. Tele-CMS also supports the use of custom JavaScript code to transform the query results.
- **Customise widgets:** Widgets are the UI components that can be edited using Tele-CMS's visual app builder ( Eg: tables, charts, forms, etc ). Widgets have events such as `on click`, `on row selected`, `on page changed`, etc. Every UI widget has a dark version.

Tele-CMS binds together the data sources, queries and widgets to convert business logic into custom applications.

## Getting Started

These resources will help you quickly build and deploy apps using Tele-CMS:

- **[Basic Tutorial](/docs/tutorial/creating-app)** - Learn how to build simple UI and connect to data sources.
- **[Deploy](/docs/setup/)** - Learn how to deploy Tele-CMS on Heroku, Kubernetes, etc

The references for data sources and widgets:

- **[Datasource Reference](/docs/data-sources/redis)**
- **[Widget Reference](/docs/widgets/table)**

## Complete tutorials

- **[Build a GitHub star history tracker](https://blog.service.exchange/build-github-stars-history-app-in-5-minutes-using-low-code/)**
- **[Build an AWS S3 file explorer app](https://blog.service.exchange/building-an-app-to-view-and-upload-files-in-aws-s3-bucket/)**
- **[Build a WhatsApp CRM](https://blog.service.exchange/build-a-whatsapp-crm-using-telecms-within-10-mins/)**
- **[Build a cryptocurrency dashboard](https://blog.service.exchange/how-to-build-a-cryptocurrency-dashboard-in-10-minutes/)**
- **[Build a Redis GUI](https://blog.service.exchange/building-a-redis-gui-using-telecms-in-5-minutes/)**
- **[Build a coupon code manager app](https://blog.service.exchange/build-a-coupon-code-manager-app-in-10-minutes/)**

## Help and Support

- We have extensively documented the features of Tele-CMS, but in case you are stuck, please feel free to e-mail us at **hello@service.exchange**
- If you are using Tele-CMS cloud, click on the chat icon at the bottom-left corner for instant help.
- If you have found a bug, please create a **[GitHub issue](https://github.com/service-exchange/fix/issues)** for the same.
- Feel free to join our highly active **[Slack Community](https://join.slack.com/)**.
