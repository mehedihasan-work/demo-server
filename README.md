## Smart Chat

### Technologies

- Typescript
- Prisma with PostgreSQL
- Express
- JWT
- Others

### How to run the app locally

1. Download the project from github

2. If nodeJs is not installed then install it

3. Open the project with any code editor

4. Open a terminal in the project folder and run "npm install". The following command will install all the listed dependencies in the package.json file, needed for the application to run smoothly.

5. Now when the dependencies are installed, create a .env file and inside the file declare the following environment variables:

   - DATABASE_URL : PostgreSQL database url. Url can be from local machine or cloud. Eg. "postgresql ://johndoe:randompassword@localhost:5432/mydb?schema=public"
   - NODE_ENV : Eg. development
   - PORT : Host port. Eg. 5000

6. Do prisma(postgreSql) migration:

   - npx prisma migrate dev

7. Build the typescript code

   - npm run build: it will invoke the tsc command needed for building ts files

8. Now that the typescript code is done building, we can run the application

   - npm run dev : this command will run tsc-node-dev which will keep the app running and automatically restart on any change in the code. This is helpful while development.

   - npm start : this will run the javascript server file with node.

   - node ./dist/server.js : if you want to directly use node to run the server file

9. Finally when the app in running on localhost, api calls can be made

10. For running the project inside remote ubuntu server:

- pm2 start ./dist/server.js --name chat-server : Using pm2. This ensure zero runtime when building and reloading
- pm2 reload chat-server : This can be used to restart a running or stopped process

OR,

- After completing upto step 7, run the following command -> "nohup node ./dist/server.js &"
- Make sure you put "&" at the end. It will run the server on the background even if you exit the terminal

11. For stopping the server

- pm2 stop chat-server : This stops a running process

OR,

- ps aux | grep node : This command will give you all the running processes
- Look for the process with "node ./dist/server.js" at the end. Copy the process code
- kill [process code] : this command will kill the running process and stop the server
