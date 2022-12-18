import { Container, Grid, Typography, Rating, FormControl, OutlinedInput, Button, ButtonGroup, IconButton, TableRow, TableContainer, TableCell, TableBody, Table, TableHead, Card, CardContent, Stack, Divider, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import item1 from "../assets/Item1.png";
import item2 from "../assets/Item2.png";
import item3 from "../assets/Item3.png";
import item4 from "../assets/Item4.png";
import item5 from "../assets/Item5.png";
import item6 from "../assets/Item6.png";
import React, { useEffect, useState } from "react";

const CartItem = () => {
  function createData(id, name, img, price, count) {
    return { id, name, img, price, count };
  }

  const rows = [
    createData(1, "Frozen yoghurt", item1, 15, 2),
    createData(2, "Ice cream sandwich", item2, 20, 5),
    createData(3, "Eclair", item3, 40, 4),
    createData(4, "Cupcake", item4, 10, 3),
    createData(5, "Gingerbread", item5, 17, 1),
    createData(6, "Bread", item6, 25, 2),
  ];

  const [carts, setCarts] = useState(rows);
  const [total, setTotal] = useState(0);

  const countUp = (id) => {
    let updatecart = carts.filter((item) => (item.id === id ? (item.count += 1) : item));
    console.log(updatecart);
    setCarts(updatecart);
  };

  const countDown = (id) => {
    let updatecart = carts.filter((item) => (item.id === id && item.count > 1 ? (item.count -= 1) : item));
    console.log(updatecart);
    setCarts(updatecart);
  };

  const deleteCart = (id) => {
    setCarts((prevCart) => prevCart.filter((item) => id !== item.id));
    console.log(carts);
  };

  useEffect(() => {
    const arrayTotal = carts.map((item) => item.price * item.count);
    console.log(arrayTotal);
    const totalHarga = arrayTotal.reduce((total, currentValue) => total + currentValue, 0);
    console.log(totalHarga);
    setTotal(totalHarga);
  }, [carts]);

  return (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold", fontSize: "18px" }}>Product</TableCell>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold" }} align="center">
                Price
              </TableCell>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold" }} align="center">
                Quantity
              </TableCell>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold" }} align="center">
                Total
              </TableCell>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold" }} align="center">
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((cart) => (
              <TableRow key={cart.id} sx={{ border: 0 }}>
                <TableCell component="th" scope="row" sx={{ color: "#232323" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img src={cart.img} alt={cart.name} width="100%" height="auto" />
                    </Grid>
                    <Grid item xs={10} container direction="column">
                      <Typography variant="p" sx={{ color: "#232323", mt: 1, fontWeight: "bold" }}>
                        {cart.name}
                      </Typography>
                      <Rating value={4} readOnly sx={{ color: "#ff9f0d", mt: 1 }} />
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell sx={{ color: "#232323" }} align="center">
                  ${cart.price}
                </TableCell>

                <TableCell sx={{ color: "#232323" }} align="center">
                  <ButtonGroup disableElevation variant="outlined" size="small">
                    <Button sx={{ border: "1px solid #ff9f0d !important", color: "#ff9f0d" }} onClick={() => countUp(cart.id)}>
                      +
                    </Button>

                    <Typography variant="p" sx={{ color: "#", borderTop: "1px solid #ff9f0d", borderBottom: "1px solid #ff9f0d", py: 1, px: 2 }}>
                      {cart.count}
                    </Typography>

                    <Button sx={{ border: "1px solid #ff9f0d !important", color: "#ff9f0d" }} onClick={() => countDown(cart.id)}>
                      -
                    </Button>
                  </ButtonGroup>
                </TableCell>

                <TableCell sx={{ color: "#232323" }} align="center">
                  ${cart.price * cart.count}
                </TableCell>

                <TableCell sx={{ color: "#232323" }} align="center">
                  <IconButton onClick={() => deleteCart(cart.id)}>
                    <CloseIcon sx={{ color: "#232323", "&:hover": { color: "#ff9f0d" } }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item lg={6} xs={12}>
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
        </Grid>
        <Grid item lg={6} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ color: "#232323" }}>
              Total Bil
            </Typography>
            <Card sx={{ border: " 1px solid #BDBDBD" }} variant="outlined">
              <CardContent>
                <Stack spacing={2} sx={{ mb: 2 }}>
                  <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="p" sx={{ color: "#232323" }}>
                      Cart Subtotal
                    </Typography>
                    <Typography variant="p" sx={{ color: "#232323" }}>
                      ${total}
                    </Typography>
                  </Box>
                  <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="p" sx={{ color: "#232323", opacity: "0.75" }}>
                      Shipping Charge
                    </Typography>
                    <Typography variant="p" sx={{ color: "#232323", opacity: "0.75" }}>
                      $0
                    </Typography>
                  </Box>
                </Stack>
                <Divider sx={{ width: "100%" }} />
                <Box component="div" sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Typography variant="p" sx={{ color: "#232323" }}>
                    Total Amount
                  </Typography>
                  <Typography variant="p" sx={{ color: "#232323" }}>
                    ${total}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Button variant="contained" sx={{ width: "100%", height: "100%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }}>
              Proceed to Checkout
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartItem;
