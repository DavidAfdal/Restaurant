import { Container, Grid } from "@mui/material";
import React from "react";
import icon1 from "../assets/IconChef.png";
import icon2 from "../assets/FoodIcon.png";
import icon3 from "../assets/MenuIcon.png";
import icon4 from "../assets/PizzaIcon.png";

const About = () => {
  const about = [
    {
      img: icon1,
      text: "Professional Chefs",
      amount: "420",
    },
    {
      img: icon2,
      text: "Items Of Food",
      amount: "320",
    },
    {
      img: icon3,
      text: "Years Of Experienced",
      amount: "30+",
    },
    {
      img: icon4,
      text: "Happy Customers",
      amount: "220",
    },
  ];
  return (
    <div className="bg_about">
      <Container maxWidth="lg" sx={{ py: "100px" }}>
        <Grid container justifyContent="space-between" rowSpacing={5}>
          {about.map((item, index) => (
            <Grid item lg={3} md={6} key={index}>
              <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", gap: "5px" }}>
                <img src={item.img} alt="icon chef" width="40%" height="auto" />
                <p style={{ fontSize: "16px", fontWeight: "600" }}>{item.text}</p>
                <h1 style={{ padding: "0", margin: "0" }}>{item.amount}</h1>
              </div>
            </Grid>
          ))}
        </Grid>
        {/* <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
          <img src={icon2} alt="icon chef" width="70%" height="auto" />
          <p style={{ fontSize: "18px", fontWeight: "600" }}>Professional Chefs</p>
          <h1 style={{ padding: "0", margin: "0" }}>420</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
          <img src={icon3} alt="icon chef" width="70%" height="auto" />
          <p style={{ fontSize: "18px", fontWeight: "600" }}>Professional Chefs</p>
          <h1 style={{ padding: "0", margin: "0" }}>420</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
          <img src={icon4} alt="icon chef" width="70%" height="auto" />
          <p style={{ fontSize: "18px", fontWeight: "600" }}>Professional Chefs</p>
          <h1 style={{ padding: "0", margin: "0" }}>420</h1>
        </div> */}
      </Container>
    </div>
  );
};

export default About;
