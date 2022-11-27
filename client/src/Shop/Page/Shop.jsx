import { Box } from "@mui/material";
import React from "react";
import HeroItem from "../../Shared/HeroItem";
import ShopItem from "../components/ShopItem";
import "./Shop.scss";

const Shop = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Our Shop" to="Shop" />
      <ShopItem />
    </Box>
  );
};

export default Shop;
