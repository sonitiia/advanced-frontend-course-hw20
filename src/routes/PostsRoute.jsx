import React from "react";
import PostList from "../components/post/PostList";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { NEWS_ROUTE } from "../app/Routes";

const PostsRoute = () => {
  return (
    <>
      <PostList />
      <Button
        variant="outlined"
        size="large"
        to={NEWS_ROUTE}
        component={RouterLink}
        sx={{ alignSelf: "center", my: "4%" }}>
        See more
      </Button>
    </>
  );
};

export default PostsRoute;
