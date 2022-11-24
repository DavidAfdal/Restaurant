import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Creative = () => {
  return (
    <div className="bg_Creative">
      <Container maxWidth="lg" sx={{ py: "120px", display: "flex", alignItems: "flex-end", flexDirection: "column", textAlign: "right" }}>
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
            maxWidth: "60%",
          }}
        >
          <span style={{ color: "#ff9f0d" }}>We</span> Document Every Food Bean Process untile it is saved
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            color: "#fff",
            opacity: "0.75",
            maxWidth: "60%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="outlined" sx={{ borderColor: "#ff9f0d !important", color: "#ff9f0d !important", borderRadius: "50px", px: 2, textTransform: "capitalize" }}>
            Read More
          </Button>
          <Button variant="text" sx={{ color: "#fff !important", textTransform: "capitalize" }}>
            Play Video
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Creative;
