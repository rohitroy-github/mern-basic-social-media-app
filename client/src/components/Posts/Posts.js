import React from 'react'

import Post from './Post/Post'; 

import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  
  return (
    <>
      <h3>Posts Component</h3>
      <Post /> 
    </>
    )
}

export default Posts;