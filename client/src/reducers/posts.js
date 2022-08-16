//What's a reducers ? 

export default (posts = [], action) => { 
    switch (action.type) {
        case 'FETCH_ALL':

            // action.payload > data 
            return action.payload;             
        
        //CREATING a new post
        case 'CREATE': 
        //newpost = action.payload
            return [ ...posts, action.payload];

        default:
            return posts;
    }
}