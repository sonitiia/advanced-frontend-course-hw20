import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import Posts from "../components/post/Posts";

const NewsRoute = () => {
  return (
    <ImageList cols={3} rowHeight={300}>
      {Posts.map((post) => (
        <ImageListItem key={post.id}>
          <img
            srcSet={`${post.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${post.image}?w=164&h=164&fit=crop&auto=format`}
            alt={post.content}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default NewsRoute;
