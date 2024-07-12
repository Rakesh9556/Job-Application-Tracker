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

2. set up the User.model.js and Job.model.js
