---
id: snowflake
title: Snowflake
---

# Snowflake

Tele-CMS can connect to Snowflake databases to read and write data.

- [Connection](#connection)
- [Getting Started](#querying-snowflake)

## Connection

Please make sure the host/ip of the database is accessible from your VPC if you have self-hosted Tele-CMS. If you are using Tele-CMS cloud, please whitelist our IP. You can find snowflake docs on network policies **[here](https://docs.snowflake.com/en/user-guide/network-policies.html)**.

To add a new Snowflake database, click on the `+` button on data sources panel at the left-bottom corner of the app editor. Select Snowflake from the modal that pops up.

Tele-CMS requires the following to connect to your Snowflake database.

- **Account**
- **Username**
- **Password**

:::info
You can also configure for **[additional optional parameters](https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#additional-connection-options)**.
:::

<div style={{textAlign: 'center'}}>

![Tele-CMS - Snowflake connection](/img/datasource-reference/snowflake/snowflake-connect.png)

</div>

## Querying Snowflake

Click on `+` button of the query manager at the bottom panel of the editor and select the database added in the previous step as the datasource. Query manager then can be used to write raw SQL queries.

<div style={{textAlign: 'center'}}>

![Tele-CMS - Snowflake query](/img/datasource-reference/snowflake/snowflake-query.png)

</div>

Click on the `run` button to run the query.

**NOTE:** Query should be saved before running.

:::tip
Query results can be transformed using transformations. Read our transformations documentation to see how: [link](/docs/tutorial/transformations)
:::
