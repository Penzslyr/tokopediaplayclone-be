# tokopediaplayclone-be
mid term assignment from generasi gigih 3.0 , cra
Effendi Prakoso - FS4 - GG3FSGP0312

database structure 
![image](https://github.com/Penzslyr/tokopediaplayclone-be/assets/90124411/04f1e288-6ec9-4b40-b913-a902a7ddf4b8)


api structure 
- models : had 3 model create schema to connect mongo (comment, product, video)
- routes : all api route that available and the function 
- .env : to save the database url
- index.js : running the server

how to run in local 
- make sure u have mongodb and node installed

in mongodb
- open mongosh
- create database name "tokopediaplay"
- run this command "use tokopediaplay" in mongosh 

- create collection by following command :
// Create the "account" collection
db.createCollection('account')

// Create the "comments" collection
db.createCollection('comments')

// Create the "products" collection
db.createCollection('products')

// Create the "videos" collection
db.createCollection('videos')

- insert some dummy data from mongodb compass (add data -> choose impoort json), i put the json file in folder data 

db name
- db account : tokopediaplay.account
- db comments : tokopediaplay.commets
- db products : tokopediaplay.products
- db videos : tokopediaplay.videos

in node/express js , run following command
- yarn add / npm install
- yarn start / npm start

to test please read this postman api documentation
- https://documenter.getpostman.com/view/23780866/2s9XxsUvj9

