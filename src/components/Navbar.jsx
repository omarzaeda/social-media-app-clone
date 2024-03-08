import { Mail, Notifications, Pets, SearchOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "2px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  alignItems: "center",
  gap: 5,
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Wouh!
        </Typography>
        <Pets sx={{ display: { sm: "none" } }} />
        <Search>
          <SearchOutlined color="primary" />
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Mail color="white" sx={{ width: 20, height: 20 }} />
          </Badge>
          <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
            <Notifications color="white" sx={{ width: 20, height: 20 }} />
          </Badge>

          <Avatar
            onClick={() => setOpen(!open)}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/326760677_743832077306021_949573833167975523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=82b7BvtzxpkAX8YeI4d&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDJOHt2KX1E7u_8YXWBmI7dc65lG4SnZBDfUuYUZwUgZw&oe=65F013C4"
          />
        </Icons>
        <UserBox onClick={() => setOpen(!open)}>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/326760677_743832077306021_949573833167975523_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=82b7BvtzxpkAX8YeI4d&_nc_ht=scontent-hbe1-2.xx&oh=00_AfDJOHt2KX1E7u_8YXWBmI7dc65lG4SnZBDfUuYUZwUgZw&oe=65F013C4"
          />
          <Typography variant="span">Omar</Typography>
        </UserBox>
      </StyledToolbar>{" "}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
