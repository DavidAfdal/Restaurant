import { Button, Container, Grid, Stack, TextField, Typography, FormControl, OutlinedInput, ButtonGroup, Card, CardContent, Box, Rating, Divider } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import item1 from "../../Shop/assets/Item1.png";

const CheckOutItem = () => {
  const auth = useContext(AuthContext);
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const getDataCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/${auth?.userId}`);
      setCarts(response?.data?.data?.food);
      setSubTotal(response?.data?.data?.total_price_cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataCart();
  }, [auth.userId]);

  useEffect(() => {
    setTotal(subTotal + subTotal * (5 / 100));
  }, [subTotal]);

  return (
    <Container sx={{ py: "100px" }}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <Stack spacing={2}>
              <Typography sx={{ color: "#232323" }}>Shipping Address</Typography>
              <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
              </Stack>
              <Stack direction="column">
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h4" sx={{ color: "#232323", mb: 2 }}>
                    Coupon Code
                  </Typography>
                  <Card sx={{ border: "1px solid #E0E0E0" }} variant="outlined">
                    <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="p" sx={{ color: "#232323", opacity: "0.75" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
                      </Typography>
                      <FormControl sx={{ display: "flex", mt: 2 }} variant="outlined">
                        <ButtonGroup>
                          <OutlinedInput id="outlined-adornment-weight" sx={{ width: "100%", borderRadius: "4px 0 0 4px" }} placeholder="Enter Here code" />
                          <Button variant="contained" sx={{ width: "20%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }}>
                            Apply
                          </Button>
                        </ButtonGroup>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ border: "1px solid #E0E0E0" }} variant="outlined">
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                {carts.map((cart) => (
                  <Grid container spacing={2} sx={{ mb: 2 }} key={cart._id}>
                    <Grid item xs={5}>
                      <img src={cart.photos} alt={cart.name} width="100%" height="auto" />
                    </Grid>
                    <Grid item xs={7}>
                      <Stack spacing="5px">
                        <Typography variant="p" sx={{ color: "#232323", fontWeight: "bold" }}>
                          {cart.name}
                        </Typography>

                        <Typography>
                          {cart.total_food} {cart.total_food > 1 ? "items" : "item"}
                        </Typography>
                        <Typography>Rp. {cart.total_price}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                ))}
                <Divider />
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Subtotal</Typography>
                    <Typography>Rp. {subTotal}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Discount</Typography>
                    <Typography>Rp. 0 </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Tax (5%) </Typography>
                    <Typography>Rp. {subTotal * (5 / 100)}</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Total</Typography>
                    <Typography>Rp. {total}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CheckOutItem;
