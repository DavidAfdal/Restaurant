import React, { useState, useEffect } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import HeroItem from "../../Shared/HeroItem";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return isLoading ? (
    <Container maxWidth="lg" sx={{ py: "250px", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress sx={{ color: "#ff9f0d" }} size={70} />
      </Box>
    </Container>
  ) : (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Shopping Cart" to="Cart" />
      <CartItem />
    </Box>
  );
};

export default Cart;
