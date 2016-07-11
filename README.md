## Node.js Chat

Chat app using Node.js and web sockets.


## Run Locally

Install all the dependencies:

```
npm install (you may need to prefix this with sudo if you're on macOS)
```

Run the app:

```
node start.js
```

Consider using the package `nodemon` if you'd like. It'll auto start your server every time you save.

```
npm install nodemon -g
nodemon start.js
```

Navigate to `http://localhost:3000`. Start up two browsers and start role-playing.


## Signing-Up, and Deploying to Heroku

### Documentation

1. From heroku.com:

  * Click "Documentation"
  * Click "Getting Started"
  * Click Node.js from the list of options

1. Install Heroku toolbelt from [here](https://toolbelt.heroku.com/)
1. Sign-up via the website
1. Login using the command line tool:

```
heroku login
```

Next...

Create your Heroku app:

```
heroku create
```

Git deploy your app:

```
git push heroku master
```

Open the app (same as opening it in the browser):

```
heroku open
```

Now your app should be up on Heroku.