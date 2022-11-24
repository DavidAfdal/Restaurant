import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import Item1 from "../assets/Item1.png";
import Item2 from "../assets/Item2.png";
import Item3 from "../assets/Item3.png";
import Item4 from "../assets/Item4.png";

const FoodIten = () => {
  return (
    <Container maxWidth="lg" sx={{ pb: "120px" }}>
      <Typography variant="h5" sx={{ textAlign: "center", fontFamily: "Inter", fontWeight: 400, color: "#ff9f0d", mb: 2 }}>
        Food Category
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "Helvetica", fontWeight: 700, color: "#fff", lineHeight: "68px", textAlign: "center", mb: 2 }}>
        Our Food Item
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item md={6} lg={3}>
          <img src={Item1} alt="item1" style={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} lg={3}>
          <img src={Item2} alt="item2" style={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} lg={3}>
          <img src={Item3} alt="item3" style={{ width: "100%", height: "auto" }} />
        </Grid>
        <Grid item md={6} lg={3}>
          <img src={Item4} alt="item4" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FoodIten;
