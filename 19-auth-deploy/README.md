Auth and Deploy
===

## Auth and User Management

Goals: 

* Allow users to sign up and sign in
* Leverage existing UI components (optional)
* Protect parts of the app from unauthorized access

1. Use `firebase.auth()` via `import { auth } from '../services/firebase`
    * Event for "user", `null` or user object
1. Change App Routing
    * Track whether route is public or private
        * Store an object with various pieces of data
    * Check if no user and private route, then redirect to `#auth`
    * Initiate setting initial page from firebase auth
1. Auth UI
    * Using FirebaseUI
        * `npm i firebaseui`
        * import css? Or include link
    * (Or design your own and make js calls)

## User Data

Goals: Distinguish between data owned by current user and other users' data

* Use separate nodes in firebase to store data "by user"
* Use `.update` to write to multiple locations
* Remove needs to remove from multiple locations
* There are now separate "lists" we can access
    * Change `Pet` component to lookup pet data, so it can work regardless
    of which list in come from
    * Make `PetList` accept a list reference

  
## Build

Goal: Optimize for production build vs development process

* Separate Webpack config
    * dev
    * production
* New Plugins:
    * `> npm i -D extract-text-webpack-plugin`
    * `> npm i -D uglifyjs-webpack-plugin`
    * `webpack.DefinePlugin`
    * plus `> npm i -D dotenv` 
* Minify Code


## Environment Variables

Goal: Have environments be easily configurable

* Injected via Webpack `DefinePlugin`
* ~~Defined in webpack config file~~
* Defined in `.env` file

# Deploy

Goal: Deploy built code to firebase, github, or other source

* Github
    * Set url in firebase console
    * Turn on docs folder
    * `> git push origin master` 
* Firebase
    * `> npm install -g firebase-tools`
    * `> firebase login`
    * `> firebase init`
    * Go through questions
    * ~~`> firebase deploy`~~
    * Add to `package.json`
