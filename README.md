# Node.js Chat

Chat app using Node.js and web sockets.


## Install Node and Redis

1. Install [NodeJS](http://nodejs.org)
1. Install [Redis]Go to http://redis.io/download and install Redis


## Run Locally

Install all dependencies:

```shell
npm install
```

You may need to use `sudo npm install` if you're on macOS.


Run the app:

```shell
node start.js
```

Consider using the [`nodemon`](http://nodemon.io/) package if you'd like. Nodemon will auto start your server every time you save.

```shell
npm install nodemon -g
nodemon start.js
```

Navigate to `http://localhost:3000`. Open two browsers and start role-playing.


## Signing-Up, and Deploying to Heroku

### Documentation

1. From heroku.com:

  * Click "Documentation"
  * Click "Getting Started"
  * Click Node.js from the list of options

1. Install Heroku toolbelt from [here](https://toolbelt.heroku.com/)
1. Sign-up via the website
1. Login using the command line tool:

```shell
heroku login
```

Next...

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