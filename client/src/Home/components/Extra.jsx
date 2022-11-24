import { Container, Grid } from "@mui/material";
import extra1 from "../assets/extra1.png";
import extra2 from "../assets/extra2.png";
import extra3 from "../assets/extra3.png";
import extra4 from "../assets/extra4.png";
import extra5 from "../assets/extra5.png";
import extra6 from "../assets/item2.png";

import React from "react";

const Extra = () => {
  return (
    <Container maxWidth="lg" sx={{ my: "100px" }}>
      <Grid container spacing={6}>
        <Grid container item lg={6} direction="column" rowSpacing={2}>
          <Grid item container columnSpacing={2}>
            <Grid item xs={8}>
              <img src={extra3} style={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "flex-end" }}>
              <img src={extra6} style={{ width: "100%", height: "auto" }} />
            </Grid>
          </Grid>
          <Grid item container columnSpacing={2}>
            <Grid item xs={5}>
              <img src={extra2} style={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item xs={4} container>
              <Grid item>
                <img src={extra1} style={{ width: "100%", height: "auto" }} />
              </Grid>
            </Grid>
            <Grid item xs={3} container direction="column" rowSpacing={1}>
              <Grid item xs={2}>
                <img src={extra4} style={{ width: "100%", height: "auto" }} />
              </Grid>
              <Grid item xs={2}>
                <img src={extra5} style={{ width: "100%", height: "auto" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}>
          <h1>Hello world</h1>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Extra;
