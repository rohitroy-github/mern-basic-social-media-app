import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// Disptch any specific function
import { useDispatch } from "react-redux";

// Dispatch
import { getPosts } from "./actions/posts";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./styles";
// import memories from "./images/memories.png";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  //Hook
  const dispatch = useDispatch();
  const classes = useStyles();

  //UseEffect
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
