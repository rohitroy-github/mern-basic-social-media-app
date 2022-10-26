import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);

// Rohit's Code

// import express from "express";

// import bodyParser from "body-parser";

// import mongoose from "mongoose";

// import cors from 'cors';

// //Importing routers

// import postRoutes from './routes/posts.js';

// //Constants for every ExpressJS application

// const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// //Using express middleware for connecting the routes
// //If url = http://localhost:5000/posts sending it to postRoutes
// app.use('/posts', postRoutes);

// //Connecting to database
// //Cloud-Atlas

// //Setting up the connection URL/ Link to the database !
// //addtheconnectionurlhere
// // const CONNECTION_URL = process.env.ENV_CONNECTION_URL;
// const CONNECTION_URL = "mongodb+srv://rht_atlas:oyZTjFn2WHk41eBg@mern-basic-social-media.hig7zws.mongodb.net/?retryWrites=true&w=majority";

// //Defining the PORT, where to host the server !
// const PORT = process.env.PORT || 5000;

// //Function to connect to the mongoDB database ! \
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
// //Returning if connection successful >
// .then(() =>
// app.listen(PORT, () => {
//     console.log(`Server is up and running at http://localhost:${PORT}/`);
// }))
// //Returning if connection in unsuccessful >
// .catch((error) => {
//     //Printing respective error message >
//     console.log(error.message);
// })

// // for removing some console errors
// // mongoose.set('useFindAndModify', false);
