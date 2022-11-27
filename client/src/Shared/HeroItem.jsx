import { Container, Typography, Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Shared.scss";

const HeroItem = ({ title, to }) => {
  const { state } = useLocation();
  let pathPrev = state?.prevPath;
  let from = pathPrev === "/" ? "Home" : pathPrev.split("/")[1];
  return (
    <div className="bg_hetoItem">
      <Container maxWidth="lg" sx={{ py: "100px" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 700 }}>
          {title}
        </Typography>
        <Breadcrumbs separator={<NavigateNextIcon sx={{ color: "#fff" }} />} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="p" sx={{ color: "#fff", fontWeight: 300 }} disabled>
            {from}
          </Typography>
          <Typography variant="p" sx={{ color: "#ff9f0d", fontWeight: 300 }}>
            {to}
          </Typography>
        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default HeroItem;
