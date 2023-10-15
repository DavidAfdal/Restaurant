import { Box, Container, Typography, Button, Stack } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PopUp = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center !important" }}>
        <Box sx={{ width: "600px", height: "300px", bgcolor: "#232323", mt: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}>
          <Stack>
            <Typography sx={{ fontSize: "21px", fontWeight: "bold" }}>Your Email Is Actived</Typography>
            <Button variant="contained" sx={{ mt: "50px", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d" } }}>
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default PopUp;
