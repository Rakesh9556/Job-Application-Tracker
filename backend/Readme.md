## Initializing Project
1. Initializing node js 


## File Structure setting up

1. create :
- root /src folder 
- .gitignore file for ignore restrictve files to push into the production
- .gitkeep file to save file that you want to push into the production code
- .env file to setting up the envirnment variables


## Setting up database connection
1. create: 
- /db inside /src
- //dbConnect.js inside /db
- //constant.js file uunder /src for storing all the constants like database name , database host, database port, app name , app version etc.

2. we need mongoose library for db connection so import it and also import DATABASE_NAME

3. set up the connection instance using try..catch block and export the connection for use


## DATA MODELLING
1. create 
- /models inside /src
- //User.model.js for modelling userdata
- //Job.model.js for modelling job data

2. set up the //User.model.js and //Job.model.js

## Server SetUp

### Setuping //app.js
1. create a //app.js inside /src where our server code will lie
2. It will helps to create a express application that will handle all our middlewares, routes, and other configs that appliction needs to run.
3. import:
- express: for routing, api, static file serving
- cors: allows frontend to easily communicate with the backend through apis hosted on different domains.
- cookieParser: helps securely store user session information as a cookie on their browser and it automatically reads this cookie from the user's browser, allowing the server to recognize and authenticate the user without need to login again
4. using app.use(), allow the server to accept json data and url data along with object
5. config for allowing cookiParser to parse cookies
6. config //app.js and export it

### Setuping //index.js

1. It is the starting point of the application, handle db connection, middlewares, routes, starts the application
2. create a //index.js inside /src , it is the starting point of the applicattion
3. import :
- dotenv: for loding the envinmental varibales from the .env file
- dbConnect: for making connection with the datbase
- {app} for establishing connection
5. config the //index.js --> config dotenv --> establish db connection
6. dbConnect return a promise --> if it reslove the promise then if any error come return the error or console the server listening port 

### Setuping AsyncHandleler to standarized all our async operntions in a systematic way

-  Asynchandeler is a utility so create a /util inside the /src where all our utility files will be stored
- it is a higher order function that helps to manage errors in asynchronous functions used in an express application
- It takes  asynchronous function (requestHandeler) as an input that might throw an error and returns a new function that calls the requestHandeler and catch any errors and pass these errors to the express error handeler


### Setuping //ApiError.js and //ApiResponse.js to standarized all errors and responses that comes during the application building

1. Create a //ApiError.js inside the /utils
2. Define the ApiError class by extending the built in Error class of javascript
3. using constructors set the firelds and config the file 
3. similarly create //ApiResponse.js inside the  /utils and config it 
4. at last export bothe the util files


### Configuring //User.model.js
1. create methods for generating accessToken and refreshToken
- using userSchema.methods we can create new methods that are accessible on documents of the schema 
- import jwt to  generate jwt token

### Generate access token
1. create a accessToken method
2. using jwt.sign() create a jwt token and pass things:
- jwt.sign(payload, secret, [options, callback])
- payload is the object that contains the data we want to include in the token (ex: _id, email, username, fullName, etc)
  