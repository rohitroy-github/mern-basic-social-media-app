import mongoose from "mongoose";

//Defining a particular schema for MongoDB post !
const postSchema = mongoose.Schema({ 
    title: String, 
    message: String, 
    creator: String, 
    tags: [String], 
    selectedFile: String, 
    likeCount: { 
        type: Number, 
        default: 0
    }, 
    createdAt: { 
        type: Date,
        default: new Date()
    }, 
}); 

//Turning schema into a model 
const PostMessage = mongoose.model('PostMessage', postSchema); 

//Exporting a mongoose model for the media post
export default PostMessage;