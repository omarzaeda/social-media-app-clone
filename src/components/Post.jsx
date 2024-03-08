import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        sx={{ cursor: "pointer" }}
        avatar={
          <Avatar
            src="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/326760677_743832077306021_949573833167975523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=82b7BvtzxpkAX8YeI4d&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDJOHt2KX1E7u_8YXWBmI7dc65lG4SnZBDfUuYUZwUgZw&oe=65F013C4"
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Omar Zaeda"
        subheader="March 8, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        sx={{ objectPosition: "top" }}
        image="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/326760677_743832077306021_949573833167975523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=82b7BvtzxpkAX8YeI4d&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDJOHt2KX1E7u_8YXWBmI7dc65lG4SnZBDfUuYUZwUgZw&oe=65F013C4"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Life is an unpredictable journey, a mosaic of moments that shape our
          existence. It's a tapestry woven with joy, challenges, and the
          constant pursuit of growth.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
