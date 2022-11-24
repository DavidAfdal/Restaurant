import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Chef1 from "../assets/chef1.png";
import Chef2 from "../assets/chef2.png";
import Chef3 from "../assets/chef3.png";
import Chef4 from "../assets/chef4.png";

const OurChef = () => {
  return (
    <Container maxWidth="lg" sx={{ py: "100px" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          color: "#ff9f0d",
          textAlign: "center",
        }}
      >
        Chefs
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Helvetica",
          fontWeight: 700,
          color: "#fff",
          lineHeight: "68px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#ff9f0d" }}>Me</span>et Our Chef
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item lg={3} xs={6}>
          <img src={Chef1} alt="chef 1" width="100%" height="auto" />
        </Grid>
        <Grid item lg={3} xs={6}>
          <img src={Chef2} alt="chef 2" width="100%" height="auto" />
        </Grid>
        <Grid item lg={3} xs={6}>
          <img src={Chef3} alt="chef 3" width="100%" height="auto" />
        </Grid>
        <Grid item lg={3} xs={6}>
          <img src={Chef4} alt="chef 4" width="100%" height="auto" />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button variant="outlined" sx={{ borderColor: "#ff9f0d !important", color: "#ff9f0d !important", borderRadius: "50px", px: 2, textTransform: "capitalize" }}>
          See More
        </Button>
      </div>
    </Container>
  );
};

export default OurChef;
