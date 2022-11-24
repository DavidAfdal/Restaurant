import { Avatar, Box, Card, CardContent, Container, Rating, Typography } from "@mui/material";
import React from "react";
import vector from "../assets/Vector.png";
import avatar from "../assets/avatar.png";
import Slider from "react-slick";

const Testimoni = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container maxWidth="lg" sx={{ py: "50px" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          color: "#ff9f0d",
        }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Helvetica",
          fontWeight: 700,
          color: "#fff",
          lineHeight: "68px",
        }}
      >
        <span style={{ color: "#ff9f0d" }}>Wh</span>at our client are saying
      </Typography>
      <Box sx={{ maxWidth: { xs: "100%", lg: "50%" }, margin: "auto" }}>
        <Slider {...settings} style={{ width: "100%" }}>
          <Box sx={{ width: "100%", mt: "100px", position: "relative" }}>
            <Avatar src={avatar} sx={{ width: "120px", height: "120px", position: "absolute", top: "-22%", left: "50%", transform: "translateX(-50%)" }} />
            <Card sx={{ pt: 6, px: 4 }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  <img src={vector} width="15px" height="auto" />
                  <img src={vector} width="15px" height="auto" />
                </div>
                <Typography variant="p" sx={{ fontSize: "14px", mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                  mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </Typography>
                <Rating value={4} readOnly sx={{ color: "#ff9f0d" }} />
                <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                  Alamin Hasan
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  Food Specialist
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ width: "100%", mt: "100px", position: "relative" }}>
            <Avatar src={avatar} sx={{ width: "120px", height: "120px", position: "absolute", top: "-22%", left: "50%", transform: "translateX(-50%)" }} />
            <Card sx={{ pt: 6, px: 4 }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  <img src={vector} width="15px" height="auto" />
                  <img src={vector} width="15px" height="auto" />
                </div>
                <Typography variant="p" sx={{ fontSize: "14px", mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                  mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </Typography>
                <Rating value={4} readOnly sx={{ color: "#ff9f0d" }} />
                <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                  Alamin Hasan
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  Food Specialist
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ width: "100%", mt: "100px", position: "relative" }}>
            <Avatar src={avatar} sx={{ width: "120px", height: "120px", position: "absolute", top: "-22%", left: "50%", transform: "translateX(-50%)" }} />
            <Card sx={{ pt: 6, px: 4 }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  <img src={vector} width="15px" height="auto" />
                  <img src={vector} width="15px" height="auto" />
                </div>
                <Typography variant="p" sx={{ fontSize: "14px", mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                  mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </Typography>
                <Rating value={4} readOnly sx={{ color: "#ff9f0d" }} />
                <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                  Alamin Hasan
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  Food Specialist
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ width: "100%", mt: "100px", position: "relative" }}>
            <Avatar src={avatar} sx={{ width: "120px", height: "120px", position: "absolute", top: "-22%", left: "50%", transform: "translateX(-50%)" }} />
            <Card sx={{ pt: 6, px: 4 }}>
              <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  <img src={vector} width="15px" height="auto" />
                  <img src={vector} width="15px" height="auto" />
                </div>
                <Typography variant="p" sx={{ fontSize: "14px", mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                  mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </Typography>
                <Rating value={4} readOnly sx={{ color: "#ff9f0d" }} />
                <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                  Alamin Hasan
                </Typography>
                <Typography variant="p" sx={{ fontSize: "14px" }}>
                  Food Specialist
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Slider>
      </Box>
    </Container>
  );
};

export default Testimoni;
