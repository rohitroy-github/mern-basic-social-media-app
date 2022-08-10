//Creating all the handlers/ functions for the particular routes ! 

//Importing our real mongoose model
import PostMessage from "../models/postMessage.js";

//Function for displaying the available posts 
export const getPosts = async (req, res) => { 
    // res.send('getPost route is running !');
    try{ 
        //If things are successfully running 

        //Since find() inside a model takes time so adding 'async' in the function getPosts() & 'await' in postMessage
        const postMessages = await PostMessage.find(); 
        // console.log(postMessages);

        //status > 200 means everything is ruunning successfully
        //passing the postMessage as output
        res.status(200).json(postMessages);        
    }
    catch(error) { 
        //If there is an error

        //status > 404 means an error 
        //passing the respective error message as output
        res.status(404).json({ message: error.message });
    }
};

export const createPost = (req, res) => { 
    res.send('createPost route is running !');
    const post = req.body; 
    const newPost = new PostMessage(post); 

    try{ 
        newPost.save(); 

        res.status(201).json(newPost); 
    }
    catch(error) { 
        res.status(409).json({ message: error.message });
    }
};