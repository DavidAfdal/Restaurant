import Hero from "../components/Hero";
import React from "react";

import "./Home.scss";
import BestFood from "../components/BestFood";
import FoodIten from "../components/FoodIten";
import Extra from "../components/Extra";
import About from "../components/About";
import OurMenu from "../components/OurMenu";
import OurChef from "../components/OurChef";
import Testimoni from "../components/Testimoni";
import Creative from "../components/Creative";
import Blog from "../components/Blog";

const Home = () => {
  return (
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
      <Blog />
    </>
  );
};

export default Home;
