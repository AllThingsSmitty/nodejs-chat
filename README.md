# Node.js Chat

Chat app using Node.js and web sockets.


## Install Node and Redis

1. Install [NodeJS](http://nodejs.org)
1. Install [Redis](http://redis.io/download)


## Run Locally

Install all dependencies:

```shell
npm install
```

**Note:** You may need to use `sudo npm install` on macOS.


Run the app:

```shell
node start.js
```

**Note:** You may want to consider using [`nodemon`](http://nodemon.io/) which will auto-start your server every time you save.

```shell
npm install nodemon -g
nodemon start.js
```

Navigate to `http://localhost:3000`. Open two browsers and start chatting.


## Signing-Up, and Deploying to Heroku

### Documentation

From [heroku.com](http://heroku.com):

  * Click "Documentation"
  * Click "Getting Started"
  * Click Node.js from the list of options

Install [Heroku toolbelt](https://toolbelt.heroku.com/).

[Sign-up](https://signup.heroku.com/) via the website.

Login using the command line tool:

```shell
heroku login
```

Create your Heroku app:

```shell
heroku create
```

Git deploy your app:

```shell
git push heroku master
```

Open the app (same as opening it in the browser):

```shell
heroku open
```

Your app should now be on Heroku.