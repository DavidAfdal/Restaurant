import { Box, Container, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import HeroItem from "../../Shared/HeroItem";
import ShopItem from "../components/ShopItem";
import "./Shop.scss";

const Shop = () => {
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
      <HeroItem title="Our Shop" to="Shop" />
      <ShopItem />
    </Box>
  );
};

export default Shop;
