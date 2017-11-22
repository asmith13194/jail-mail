## Setup

# From the cli run the following commands replacing ... w/ database name for your project
*  yarn install
*  createdb jailmail
*  createdb jailmail-test

# From text editor create a client/.env file and update the following
*  JWTSECRET = ...
*  DATABASE_URL = jailmail
*  DATABASE_URL_TEST = jailmail-test
*  FRONTEND_URL = ...

# From the cli run the following command to start the server using nodemon
*  yarn start
