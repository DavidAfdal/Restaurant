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

const drawerWidth = 240;

const NavbarAdmin = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "#0D0D0D" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <span style={{ color: "#ff9f0d" }}>Food</span>truck Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <span style={{ color: "#ff9f0d" }}>Food</span>truck Admin
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Dashboard", "Add Product", "Update Product", "Discount"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index === 1 || index == 2 ? index == 1 ? <RestaurantMenuOutlinedIcon /> : <FastfoodOutlinedIcon /> : index === 0 ? <DashboardCustomizeOutlinedIcon /> : <DiscountOutlinedIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button variant="text" onClick={() => auth.adminLogout()} sx={{ color: "#ff9f0d" }}>
          Logout
        </Button>
      </Drawer>
    </>
  );
};

export default NavbarAdmin;
