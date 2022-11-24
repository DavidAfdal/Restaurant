import { Container, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { Link } from "react-router-dom";

const ShopList = () => {
  const breadcrumbs = [
    <Link to="/" style={{ textDecoration: "none", color: "#fff", fontWeight: 300 }}>
      Home
    </Link>,
    <Link style={{ textDecoration: "none", color: "#ff9f0d", fontWeight: 300 }}>Shop</Link>,
  ];
  return (
    <div className="bg_shop">
      <Container maxWidth="lg" sx={{ py: "100px" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700 }}>
          Our Shop
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ color: "#fff" }} />} sx={{ display: "flex", justifyContent: "center" }}>
          {breadcrumbs}
        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default ShopList;
