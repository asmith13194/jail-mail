## Setup

### From the terminal in the root directory run the following commands
*  createdb jailmail
*  createdb jailmail-test
*  cd /client
*  yarn install
*  ../server
*  yarn install

### From text editor create a server/.env file and update the following
*  JWTSECRET = ...
*  DATABASE_URL = jailmail
*  DATABASE_URL_TEST = jailmail-test
*  FRONTEND_URL = http://localhost:3000

### From text editor create a client/.env file and update the following
*  REACT_APP_JWTSECRET = ...
*  REACT_APP_API = http://localhost:8000

### From the terminal run the following command to start the frontend and backend server
*  yarn start
