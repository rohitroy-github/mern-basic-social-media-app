import express from 'express'; 

const router = express.Router(); 

import { getPosts, createPost } from '../controllers/posts.js';

//Routes

//GET route 
router.get('/', getPosts); 

//POST route
router.post('/', createPost); 


export default router; 

