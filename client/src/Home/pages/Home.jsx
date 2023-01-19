import Hero from "../components/Hero";
import React, { useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";

import "./Home.scss";
import BestFood from "../components/BestFood";
import FoodIten from "../components/FoodIten";
import Extra from "../components/Extra";
import About from "../components/About";
import OurMenu from "../components/OurMenu";
import OurChef from "../components/OurChef";
import Testimoni from "../components/Testimoni";
import Creative from "../components/Creative";
import { useEffect } from "react";

const Home = () => {
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
    <>
      <Hero />
      <BestFood />
      <FoodIten />
      <Extra />
      <About />
      <OurMenu />
      <OurChef />
      <Testimoni />
      <Creative />
    </>
  );
};

export default Home;
