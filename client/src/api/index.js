import axios from 'axios'; 

// URL pointing to the backend route
const url = 'http://localhost:5000/posts'; 

// Exporting fetchPost function to redux folders 
export const fetchPost = () => axios.get(url); 
