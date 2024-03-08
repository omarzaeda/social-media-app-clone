import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box sx={{ flex: { xs: 20, sm: 4 } }} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
