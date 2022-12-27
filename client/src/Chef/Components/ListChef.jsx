import { Container, Grid, Stack, Typography } from "@mui/material";
import { Chefs } from "../../Shop/Dummydata";
import React from "react";

const ListChef = () => {
  return (
    <Container maxWidth="lg" sx={{ py: "100px" }}>
      <Grid container spacing={2}>
        {Chefs?.map((chef) => (
          <Grid item key={chef?.id} lg={3} md={4} xs={6}>
            <Stack>
              <img src={chef?.img} alt={chef?.name} width="100%" height="auto" />
              <Typography sx={{ color: "#232323", textAlign: "center", mt: 1, fontWeight: "Bold", fontSize: "18px" }}>{chef?.name}</Typography>
              <Typography sx={{ color: "#232323", textAlign: "center" }}>{chef?.title}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListChef;
