import React from "react";
import { Box } from "@mui/material";
import HeroItem from "../../Shared/HeroItem";
import CheckOutItem from "../components/CheckOutItem";

const CheckOut = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Payment Page" to="CheckOut" />
      <CheckOutItem />
    </Box>
  );
};

export default CheckOut;
