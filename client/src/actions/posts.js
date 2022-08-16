import * as api from "../api";

// ActionCreators > functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    //Fetching all the data from the api
    const { data } = await api.fetchPosts();

    // action > is an object having a type and a payload
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } 
  catch (error) { 
    console.log(error.message); 
  }
};

//Action to create post
export const createPost = (post) => async (dispatch) => { 
  try { 
    const {data} = await api.createPost(post); 

    dispatch({ type: 'CREATE', payload: data}); 
  }
  catch (error) { 
    console.log(error); 
   }
}

//Action to update post 
// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
