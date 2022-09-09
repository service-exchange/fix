---
id: ec2
title: AWS EC2
---

# AWS EC2

:::info
You should setup a PostgreSQL database manually to be used by the Tele-CMS server.
:::

Follow the steps below to deploy Tele-CMS on AWS EC2 instances.

1. Setup a PostgreSQL database and make sure that the database is accessible from the EC2 instance.

2. Login to your AWS management console and go to the EC2 management page.

3. Under the `Images` section, click on the `AMIs` button.

4. Find the [Tele-CMS version](https://github.com/service-exchange/fix/releases) you want to deploy. Now, from the AMI search page, select the search type as "Public Images" and input the version you'd want `AMI Name : telecms_vX.X.X.ubuntu_bionic` in the search bar.

5. Select Tele-CMS's AMI and bootup an EC2 instance.

  Creating a new security group is recommended. For example, if the installation should receive traffic from the internet, the inbound rules of the security group should look like this:

   protocol| port     | allowed_cidr|
   ----| -----------  | ----------- |
   tcp | 22           | your IP |
   tcp | 80           | 0.0.0.0/0 |
   tcp | 443          | 0.0.0.0/0   |

6. Once the instance boots up, SSH into the instance by running `ssh -i <path_to_pem_file> ubuntu@<public_ip_of_the_instance>`

7. Switch to the app directory by running `cd ~/app`. Modify the contents of the `.env` file. ( Eg: `vim .env` )

   The default `.env` file looks like this:

   ```bash
   TELECMS_HOST=http://<example>
   LOCKBOX_MASTER_KEY=<example>
   SECRET_KEY_BASE=<example>
   PG_DB=telecms_prod
   PG_USER=<pg user name>
   PG_HOST=<pg host>
   PG_PASS=<pg user password>
   ```

   Read **[environment variables reference](/docs/setup/env-vars)**

   :::info
   If there are self signed HTTPS endpoints that Tele-CMS needs to connect to, please make sure that `NODE_EXTRA_CA_CERTS` environment variable is set to the absolute path containing the certificates.
   :::

8. `TELECMS_HOST` environment variable determines where you can access the Tele-CMS client. It can either be the public ipv4 address of your instance or a custom domain that you want to use.

   Examples:
   `TELECMS_HOST=http://12.34.56.78` or
   `TELECMS_HOST=https://yourdomain.com` or
   `TELECMS_HOST=https://telecms.yourdomain.com`

   :::info
   We use a [lets encrypt](https://letsencrypt.org/) plugin on top of nginx to create TLS certificates on the fly.
   :::

   :::info
   Please make sure that `TELECMS_HOST` starts with either `http://` or `https://`
   :::

9. Once you've configured the `.env` file, run `./setup_app`. This script will install all the dependencies of Tele-CMS and then will start the required services.

10. If you've set a custom domain for `TELECMS_HOST`, add a `A record` entry in your DNS settings to point to the IP address of the EC2 instance.

12. You're all done, Tele-CMS client would now be served at the value you've set in `TELECMS_HOST`.
