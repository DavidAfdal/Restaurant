import React from "react";
import { Box, Drawer, AppBar, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const NavbarAdmin = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (value) => {
    if (value === "Dashboard") {
      navigate("/");
    } else if (value === "Add Food") {
      navigate("/addfood");
    } else if (value === "Update Food") {
      navigate("/updatefood");
    } else if (value === "Discount") {
      navigate("/adddiscount");
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "transparent" }} elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: "#232323" }}>
            <span style={{ color: "#ff9f0d" }}>Ad</span>min Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#0D0D0D",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: "#fff" }}>
            <span style={{ color: "#ff9f0d" }}>Food</span>truck Admin
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Dashboard", "Add Food", "Update Food", "Discount"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ color: "#fff" }}>
              <ListItemButton onClick={() => handleClick(text)}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {index === 1 || index == 2 ? index == 1 ? <RestaurantMenuOutlinedIcon /> : <FastfoodOutlinedIcon /> : index === 0 ? <DashboardCustomizeOutlinedIcon /> : <DiscountOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button
          variant="text"
          onClick={() => {
            auth.adminLogout();
            navigate("/");
          }}
          sx={{ color: "#ff9f0d" }}
        >
          Logout
        </Button>
      </Drawer>
    </>
  );
};

export default NavbarAdmin;
