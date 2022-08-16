
//For making API calls
import axios from 'axios'; 

// URL pointing to the backend route
const url = 'http://localhost:5000/posts'; 

// Exporting fetchPost function to redux folders 
export const fetchPosts = () => axios.get(url); 

// Function to create new post [/post operation] 
export const createPost = (newPost) => axios.post(url, newPost); 
