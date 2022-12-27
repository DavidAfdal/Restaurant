import { Box } from "@mui/material";
import React from "react";
import HeroItem from "../../Shared/HeroItem";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Shopping Cart" to="Shoping Cart" />
      <CartItem />
    </Box>
  );
};

export default Cart;
