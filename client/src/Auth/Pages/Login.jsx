import { Box } from "@mui/material";
import React from "react";
import HeroItem from "../../Shared/HeroItem";
import LoginItem from "../Components/LoginItem";
const Login = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Login Page" to="Login" />
      <LoginItem />
    </Box>
  );
};

export default Login;
