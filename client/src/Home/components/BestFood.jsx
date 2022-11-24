import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Menu1 from "../assets/BestMenu1.png";
import Menu2 from "../assets/BestMenu2.png";
import Menu3 from "../assets/BestMenu3.png";

const BestFood = () => {
  return (
    <Container maxWidth="lg" sx={{ py: "120px" }}>
      <Grid container spacing={4}>
        <Grid item lg={6} sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              color: "#ff9f0d",
            }}
          >
            About us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Helvetica",
              fontWeight: 700,
              color: "#fff",
              lineHeight: "68px",
              maxWidth: "95%",
            }}
          >
            <span style={{ color: "#ff9f0d" }}>We</span> Creat the best foody product
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Helvetica",
              fontWeight: 300,
              color: "#fff",
              fontSize: "14px",
              maxWidth: "85%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
            risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </Typography>
          <ul className="list_bestfood">
            <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <Button variant="contained" sx={{ width: "30%", textTransform: "capitalize", fontWeight: 300, borderRadius: "50px", backgroundColor: "#ff9f0d", "&:hover": { backgroundColor: "#dc8f1a" }, py: "15px" }}>
            Read More
          </Button>
        </Grid>
        <Grid item lg={6} container direction="column" rowSpacing={{ xs: 4, lg: 2 }}>
          <Grid item lg={6}>
            <img src={Menu1} alt="Best menu 1" style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <img src={Menu2} alt="Best menu 2" style={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item xs={6}>
              <img src={Menu3} alt="Best menu 3" style={{ width: "100%", height: "auto" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestFood;
