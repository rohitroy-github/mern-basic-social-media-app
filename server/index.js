import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import cors from 'cors'; 

//Importing routers

import postRoutes from './routes/posts.js'; 

//Constants for every ExpressJS application

const app = express(); 

//Using express middleware for connecting the routes
//If url = http://localhost:5000/posts sending it to postRoutes
app.use('/posts', postRoutes); 

app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 
app.use(cors()); 

//Connecting to database 
//Cloud-Atlas

//Setting up the connection URL/ Link to the database ! 
//addtheconnectionurlhere

//Defining the PORT, where to host the server !
const PORT = process.env.PORT || 5000;

//Function to connect to the mongoDB database ! \
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
//Returning if connection successful > 
.then(() => 
app.listen(PORT, () => { 
    console.log(`Server is up and running at http://localhost:${PORT}/`); 
}))
//Returning if connection in unsuccessful > 
.catch((error) => { 
    //Printing respective error message > 
    console.log(error.message); 
})

// for removing some console errors 
// mongoose.set('useFindAndModify', false); 

