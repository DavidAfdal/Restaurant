import { Box } from "@mui/system";
import React from "react";
import HeroItem from "../../Shared/HeroItem";
import ListChef from "../Components/ListChef";

const Chef = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Our Chef" to="Chef" />
      <ListChef />
    </Box>
  );
};

export default Chef;
