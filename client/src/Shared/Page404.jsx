import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HeroItem from "./HeroItem";

const Page404 = () => {
  return (
    <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
      <HeroItem title="Error Page" to="Error" />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
          <Typography variant="h1" sx={{ color: "#ff9f0d", fontWeight: "bold" }}>
            404
          </Typography>
          <Typography variant="h5" sx={{ color: "#232323", fontWeight: "bold" }}>
            Oops! Look likes something going wrong
          </Typography>
          <Typography variant="p" sx={{ color: "#4F4F4F", width: "50% !important", mx: "auto" }}>
            Page Cannot be found! we’ll have it figured out in no time. Menwhile, cheek out these fresh ideas:
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Page404;
