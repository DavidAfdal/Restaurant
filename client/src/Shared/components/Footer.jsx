import { Stack, Container, Box, Typography, FormControl, ButtonGroup, OutlinedInput, Button, Grid, Divider } from "@mui/material";
import clock from "../ClockClockwise.png";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const pages = ["Home", "Shop", "About", "Contact"];
  const help = ["FAQ", "Term & conditon", "Repoting", "Documentation", "Support Policy", "Privacy"];

  const handleNavigatePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  return isLoading ? null : (
    <footer>
      <Container maxWidth="lg" sx={{ pt: "100px", pb: "50px" }}>
        <Stack spacing={4}>
          <Box sx={{ maxWidth: "100%" }}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} lg={7}>
                <Stack spacing={2}>
                  <Typography sx={{ fontSize: "32px" }}>Still You Need Our Support ?</Typography>
                  <Typography sx={{ fontSize: "16px" }}>Don't wait make a smart & logical quote here. Its pretty easy.</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={5}>
                <FormControl sx={{ display: "flex", mt: 2 }} variant="outlined">
                  <ButtonGroup>
                    <OutlinedInput placeholder="Enter Here code" sx={{ borderRadius: "4px 0 0 4px", bgcolor: "#ff9f0d", color: "#fff", border: "none" }} fullWidth />
                    <Button variant="contained" sx={{ width: "50%", borderRadius: "2px 2px 4px 4px", bgcolor: "#fff", color: "#ff9f0d", zIndex: 2, "&:hover": { bgcolor: "#fff", color: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }}>
                      Subscribe Now
                    </Button>
                  </ButtonGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ bgcolor: "#ff9f0d", height: 1, mt: 2 }} />

          <Grid container spacing={{ xs: 4, lg: 2 }}>
            <Grid item lg={5} xs={12}>
              <Stack spacing={2}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>About Us.</Typography>
                <Typography sx={{ fontSize: "18px" }}>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</Typography>
                <Stack spacing={2} direction="row">
                  <Box sx={{ bgcolor: "#ff9f0d", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
                    <img src={clock} width="50px" height="50px" />
                  </Box>
                  <Stack>
                    <Typography>Opening Houres</Typography>
                    <Typography>Mon - Sat(8.00 - 6.00)</Typography>
                    <Typography>Sunday - Closed</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            <Grid item lg={3} xs={12} sx={{ pl: { lg: "4rem !important", xs: 0 } }}>
              <Stack spacing={2}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Useful Links</Typography>
                {pages.map((page, i) => (
                  <Link key={i} to={page !== "Home" ? `/${page}` : "/"} state={{ prevPath: pathname }} className="nav_footer" onClick={handleNavigatePage}>
                    {page}
                  </Link>
                ))}
              </Stack>
            </Grid>

            <Grid item lg={4} xs={12} sx={{ pl: { lg: "1rem !important", xs: 0 } }}>
              <Stack spacing={2}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>Help ?</Typography>
                {help.map((help, i) => (
                  <Typography key={i} sx={{ fontSize: "1rem", "&:hover": { color: "#ff9f0d" }, cursor: "pointer" }}>
                    {help}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Box sx={{ bgcolor: "#FF9F0D" }}>
        <Container maxWidth="lg" sx={{ py: "20px", display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Copyright © 2023 by David & Gerin. All Rights Reserved.</Typography>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
