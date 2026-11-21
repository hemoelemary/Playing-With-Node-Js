# Mongo DB and Mongoose

Mongo db is nosql db 

DB 
Collection : table
document : row

> JSON VS BSON

BSON : Binary Format supports different data types like Date objectId used in MongoDB to store data efficiently

internal storage format in mongodb

JSON: used in javascript and apis

> MongoDB words
database
collection : table
document : row
field : column
id_: primary key
references : foreign key
embeddings : relations

MongoDB use MongoDB native driver or Mongoose

# Mongoose

library deal with MongoDB using nodejs using schemas and models and methods

Mongoose is ODM 

>ODM
Object Data Modeling

we deal with mongodb using mongoose to deal with data

User.create({
    name:'mohamed',
    age:20
})

npm install mongoose

mongodb local : on local device
mongodb atlas : on web service

