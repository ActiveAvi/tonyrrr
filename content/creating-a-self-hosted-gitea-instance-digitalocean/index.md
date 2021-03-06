---
title: 'Creating a Self-hosted Gitea Instance on DigitalOcean'
description: 'Escape the greedy clutches and influence of Microsoft by hosting your own git service and ditching Github!'
date: 'June 18th, 2021'
---

# Creating a Self-Hosted Gitea Instance on DigitalOcean

Gitea is a self-hosted Git service. Imagine GitLab or Github... Except you're the one hosting it. Sounds pretty awesome! Now you can take control over your code repos... Make a thousand instances, cluster 'em, hid them under rocks... Let's get started!

#### ROADMAP to success

1. Spin up a Gitea droplet
2. ???
3. Profit

#### ROADMAP to success 2.0

1. [Spin up Gitea App droplet](https://marketplace.digitalocean.com/apps/gitea)
2. Connect to the Droplet via SSH and create a new admin user
3. Access domains DNS settings to add an **A record** pointing to droplet IP
4. Configure Server to use HTTPS
5. Profit

## Creating the Server + Installing Gitea... at the same time

The **first step** thing I did was head over to the DO Marketplace to find the [Gitea App](https://marketplace.digitalocean.com/apps/gitea). The hardware I then selected was baseline: 1GB RAM, premium intel(???), 25GB NVMe SSD. That should run the app without a hitch.

I also added SSH keys and enabled back-ups for security and assurance.

## Connect + Create a New Admin User

Connecting is easy. All you need is to have added a SSH key in step one and your new droplet IP.

```shell
ssh root@YourDropletIP
```

A greeting will appear, welcoming you to the server and giving you info on where and how to access certain things. One of those things we need to access is the **gitea_admin password**, located in **/root/.digitalocean_password**.

Grab the password, and navigate to the droplet IP address via your web browser.

To create a new user: Site Administration > User Accounts > Create User Account. After that's done, delete the old admin user or change its password. Gitea will then give you the boot and you'll have to sign in with your new account. Success!

## Configure DNS Records

It's time to make our Domain point to our Gitea Apps IP address.

Head over to your registrar and into your DNS settings. Add an **A Record** pointing to your droplets IP. It's as simple as that! Give the DNS some time to propogate, and your domain name should now be connected.

In my case, I pointed the subdomain _git.tonyrrr.dev_ to the droplet.

ERROR: I messed up and accidentally used gitea as the sub-domain instead of git. Had to go back and change this later :D

## Setting up HTTPS

In order to prevent Internet baddies from preying on me, I'm going to set up the server to use TLS.

There are a few ways to do this: using Gitea's built-in server (directly), or using a reverse proxy using surver software such as apache or nginx (known as a TLS Termination Proxy). I'm going to be using a reverse proxy using nginx.

### Configuring Gitea

First I need to configure Gitea. Opening up the **app.ini** file once more, to configure Gitea to listen on **localhost:3000**

```shell
PROTOCOL = http
ROOT_URL = https://example.com
DOMAIN = localhost
PORT = 3000
```

Gitea will use the **ROOT_URL** to generate links. If we didn't do this, the links would be https://localhost... Broken. Save the file and restart Gitea.

```shell
snap restart gitea
```

### Installing and Configing nginx

Now let's get nginx!

```shell
apt update && apt install nginx
```

Let's check on our firewall to make sure it's allowing port 443, the standard port for HTTPS.

```shell
ufw status
```

And if I don't see 443 or the Nginx HTTPS ruleset enabled, then either of the following commands will work to enable it. (using the cmd "ufw app list" will give you list of rule sets)

```shell
ufw enable 'Nginx HTTPS'
ufw enable 443
```

I didn't have to do that, because the DO Marketplace App for Gitea came with HTTPS rules enabled. Let's go!

It's time to add the proxy rules to the nginx config file located at **/etc/nginx/nginx.conf**. This needs to be inserted into the **http** config block.

```shell
server {
	server_name yourdomain.com
	location / {
		proxy_pass http://localhost:3000
	}
}
```

While we're at it, add this rule to the http to increase the max file size that nginx will accept. Without this, I was not able to push to my repos. Some people said they needed more than 50m, but I'll leave that up to you.

```shell
client_max_body_size 50m;
```

This is telling nginx to listen and serve up whatever is at localhost:3000, which just so happens to be where Gitea is hanging out. After the changes have been made and saved, restart nginx.

```shell
systemctl restart nginx
```

Moving on now to the installation of Let's Encrypt!

### Installing Certbot & Generating a Cert

Let's Encrypt is a non-profit certificate authority that let's us generate and use free SSL certs. Not sure how much you can trust it all, but it seems better than not encrypting at all, right?

Let's install certbot and a tool to help us automatically configure nginx to use it.

```shell
apt install certbot python3-certbot-nginx
```

And then simply:

```shell
certbot --nginx
```

The certs will generate, and it'll ask you how you'd like to configure your server. The option to redirect to port 443, or not to, is the main one.

## Party-time

If you head over to your chosen domain for Gitea via a web browser, the App should now appear over HTTPS! And now it's time to party like we're FREEEE (from Microsoft).

## References & Sources

- https://gitea.io/
- https://docs.gitea.io/en-us/https-setup/
- https://digitalocean.com
- https://msiedlaczek.com/til/gitea/
- [git - Github Push Error: RPC failed; result=22, HTTP code = 413 - Stack Overflow](https://stackoverflow.com/questions/7489813/github-push-error-rpc-failed-result-22-http-code-413)
