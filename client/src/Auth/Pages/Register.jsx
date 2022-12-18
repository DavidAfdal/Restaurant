import { Box } from "@mui/material";
import React from "react";
import HeroItem from "../../Shared/HeroItem";
import RegisterItem from "../Components/RegisterItem";
const Register = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Register" to="Register" />
      <RegisterItem />
    </Box>
  );
};

export default Register;
