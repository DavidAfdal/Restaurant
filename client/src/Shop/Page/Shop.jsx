import { Box } from "@mui/material";
import React from "react";
import ShopItem from "../components/ShopItem";
import ShopList from "../components/ShopList";
import "./Shop.scss";

const Shop = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
      <ShopList />
      <ShopItem />
    </Box>
  );
};

export default Shop;
