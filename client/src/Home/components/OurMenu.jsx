import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import menuUtama from "../assets/MenuSet.png";
import menu1 from "../assets/Menu/meatballs.png";
import menu2 from "../assets/Menu/RotiLapis.png";
import menu3 from "../assets/Menu/Steak.png";
import menu4 from "../assets/Menu/Chesse.png";

const OurMenu = () => {
  const [value, setValue] = useState("breakfast");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Dummydata = [
    {
      img: menu1,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu2,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu3,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu4,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu1,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu2,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu3,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
    {
      img: menu4,
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.5$",
    },
  ];
  return (
    <div>
      <Container maxWidth="lg" sx={{ py: "100px" }}>
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily: "Inter", fontWeight: 400, color: "#ff9f0d", mb: 2 }}>
          Choose & pick
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: "Helvetica", fontWeight: 700, color: "#fff", lineHeight: "68px", textAlign: "center", mb: 6 }}>
          <span style={{ color: "#ff9f0d" }}>Fr</span>om our menu
        </Typography>
        <TabContext value={value}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile sx={{ "& .MuiTabs-indicator": { backgroundColor: "transparent" }, "& .Mui-selected": { color: "#ff9f0d !important" } }}>
            <Tab value="breakfast" label="Breakfast" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="lunch" label="Lunch" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="dinner" label="Dinner" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="dessert" label="Dessert" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="drink" label="Drink" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="snack" label="Snack" sx={{ color: "#fff", mr: 6 }} />
            <Tab value="soups" label="Soups" sx={{ color: "#fff", mr: 6 }} />
          </Tabs>

          <TabPanel value="breakfast" sx={{ p: 0 }}>
            <Grid container sx={{ mt: 4 }} spacing={4}>
              <Grid item xs={5} sx={{ display: "inline-block", height: "470px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={menuUtama} alt="menu utama" width="100%" height="auto" style={{ zIndex: 10 }} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid item container spacing={2}>
                  <ItemMenu items={Dummydata} />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="lunch" sx={{ p: 0 }}>
            <Grid container sx={{ mt: 4 }} spacing={4}>
              <Grid item xs={5} sx={{ display: "inline-block", height: "470px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={menuUtama} alt="menu utama" width="100%" height="auto" style={{ zIndex: 10 }} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid item container spacing={2}>
                  <ItemMenu items={Dummydata} />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="dinner" sx={{ p: 0 }}>
            <Grid container sx={{ mt: 4 }} spacing={4}>
              <Grid item xs={5} sx={{ display: "inline-block", height: "470px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={menuUtama} alt="menu utama" width="100%" height="auto" style={{ zIndex: 10 }} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid item container spacing={2}>
                  <ItemMenu items={Dummydata} />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="dessert" sx={{ p: 0 }}>
            <Grid container sx={{ mt: 4 }} spacing={4}>
              <Grid item xs={5} sx={{ display: "inline-block", height: "470px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={menuUtama} alt="menu utama" width="100%" height="auto" style={{ zIndex: 10 }} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid item container spacing={2}>
                  <ItemMenu items={Dummydata} />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value="drink" sx={{ p: 0 }}>
            <Grid container sx={{ mt: 4 }} spacing={4}>
              <Grid item xs={5} sx={{ display: "inline-block", height: "470px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={menuUtama} alt="menu utama" width="100%" height="auto" style={{ zIndex: 10 }} />
                </div>
              </Grid>
              <Grid item xs={7}>
                <Grid item container spacing={2}>
                  <ItemMenu items={Dummydata} />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Container>
    </div>
  );
};

export default OurMenu;

export const ItemMenu = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Grid item md={6} xs={12} key={index} container columnSpacing={2}>
          <Grid item xs={4}>
            <img src={item.img} width="100%" height="auto" />
          </Grid>
          <Grid item xs={8} container direction="column">
            <Grid item xs={2}>
              <h4>{item.title}</h4>
            </Grid>
            <Grid item xs={2}>
              <p style={{ fontSize: "14px", maxWidth: "70%", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "inline-block", overflow: "hidden", height: "20px" }}>{item.description}</p>
            </Grid>
            <Grid item xs={2}>
              <h3 style={{ color: "#ff9f0d" }}>{item.price}</h3>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
