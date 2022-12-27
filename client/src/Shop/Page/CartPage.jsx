import React from "react";
import { Box } from "@mui/material";
import HeroItem from "../../Shared/HeroItem";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Shopping Cart" to="Cart" />
      <CartItem />
    </Box>
  );
};

export default Cart;
