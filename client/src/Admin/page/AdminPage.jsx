import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import NavbarAdmin from "../components/NavbarAdmin";
import { Grid, Paper, Rating, Stack } from "@mui/material";

import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { ItemMenu } from "../../Shop/Dummydata";

const AdminPage = () => {
  const panel = [
    {
      title: "Jumlah Makanan",
      jumlah: 100,
    },
    {
      title: "Makanan Yang terjual",
      jumlah: 40,
    },
    {
      title: "Makanan Yang tersisa",
      jumlah: 60,
    },
  ];

  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data Penjualan makanan",
        backgroundColor: "#ff9f0d",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 20, 25, 10, 5, 8],
      },
    ],
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarAdmin />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#E8E8E8", px: 3, height: { xs: "100%", lg: "100vh" }, pt: 10 }}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            {panel.map((file, i) => (
              <Grid item xs={4} key={i}>
                <Paper sx={{ display: "flex", p: 3, justifyContent: "center", alignItems: "center" }}>
                  <Stack alignItems="center">
                    <Typography sx={{ color: "#232323", opacity: 0.5 }}>{file.title}</Typography>
                    <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{file.jumlah}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={7} xs={12}>
              <Paper sx={{ p: 2 }}>
                <Bar data={data} style={{ width: "100%", height: "100%" }} />
              </Paper>
            </Grid>
            <Grid item lg={5} xs={12}>
              <Paper sx={{ p: 2 }}>
                <Stack rowGap={2}>
                  <Typography sx={{ color: "#232323", fontSize: "2rem" }}>
                    <span style={{ color: "#ff9f0d" }}>Fav</span>orit Menu
                  </Typography>
                  {ItemMenu.map((item) => (
                    <Grid container spacing={2} key={item.id}>
                      <Grid item xs={2}>
                        <img src={item.thumbImg} alt={item.name} width="100%" height="100%" />
                      </Grid>
                      <Grid item xs={10}>
                        <Stack justifyContent="center" alignItems="flex-start">
                          <Typography sx={{ color: "#232323", fontWeight: "bold" }}>{item.name}</Typography>
                          <Rating readOnly value={item.rating} />
                          <Typography sx={{ color: "#232323" }}>Rp. {item.price}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminPage;
