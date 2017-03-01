# Project Name

> Pithy project description

## Team

  - __Product Owner__: Eric Periou  
  - __Scrum Master__: Devin Fields
  - __Development Team Members__: Eric Periou, Devin Fields

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage
To Use our app the User will need to first run npm install to get all of the dependencies.

A .env folder needs to be created in the root directory to harness all the environmental variables. Integral variables to get started are: PORT, MONGO_KEY:A Mongo Database Key, JWTSECRET:'this will be your secret salting phrase', a GOOGLE_MAP : api key is needed or the one provided is also available. Additional keys can be added for facebook, github and google logins, but for now the local login is the only available sign-in authentication system.

On initial loadup the user should be able to add users to their database, check for authentication with a Token based system from Passport login.
Users will be able to geolocate a position and insert an event to the database with this positioning, which can be used when selecting an event to attend.

To run in development environment, run npm start and a webpack server will start up on the local host.

## Requirements
-MongoDB
-Express
-Mongoose
-Node
-React
-Webpack

## Deployment
 The prototype project is currently deployed in Heroku environment. You will need your own Heroku app to get started. Once in the new environment run npm install, and npm start. This will set up your build bundle and start the server for you. Refer to Heroku CLI commands https://devcenter.heroku.com/articles/heroku-cli for information on incorporating your own environmental variables for the MongoKey, port and JWT secrets. After this point you can set up an upstream remote to push future changes or automate the updates using Github's on pull request merge criterion.

### Installing Dependencies

From within the root directory:

npm install -S <package>


### Roadmap

View the project roadmap
-2/20/2017 Started project with backend and front in barebones
-2/23/2017 complete Refactor to use Passport local login
-2/24/2017 Factored to use GoogleMaps to geolocated events
-2/26/2017 Added functionality to input the fully designed events to the database.



## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
