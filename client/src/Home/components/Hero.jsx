import React from "react";
import nasi from "../assets/nasi.png";
import Daun from "../assets/Daun.png";
import { Container, Grid, Typography, Button } from "@mui/material";

const Hero = () => {
  const handlerClick = () => {
    console.log("hello world");
  };
  return (
    <div className="wrapper">
      <Container maxWidth="lg" sx={{ pt: "30px" }}>
        <Grid container rowSpacing={{ xs: 4, lg: 0 }} columnSpacing={{ xs: 0, lg: 4 }} sx={{ alignItems: "center" }}>
          <Grid item lg={6} sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                color: "#ff9f0d",
              }}
            >
              its Quick & Amusing!
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Helvetica",
                fontWeight: 700,
                color: "#fff",
                lineHeight: "68px",
              }}
            >
              <span style={{ color: "#ff9f0d" }}>Th</span>e Art of speed food Quality
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </Typography>
            <Button variant="contained" onClick={handlerClick} sx={{ width: "30%", textTransform: "capitalize", fontWeight: 300, borderRadius: "50px", backgroundColor: "#ff9f0d", "&:hover": { backgroundColor: "#dc8f1a" }, py: "15px" }}>
              Send Me
            </Button>
          </Grid>
          <Grid item lg={6}>
            <div className="Img_wrapper">
              <img src={nasi} alt="nasi" className="img_first" />
              <img src={Daun} alt="daun" className="img_second" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
