import React from 'react'

import Post from './Post/Post'; 

import useStyles from './styles';

//For fetching data from the reduxStore
import { useSelector } from 'react-redux';

const Posts = () => {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts); 
  
  //check
  console.log(posts);

  
  return (
    <>
      <h3>Posts Component</h3>
      <Post /> 
    </>
    )
}

export default Posts;