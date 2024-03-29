import {
  Container,
  Grid,
  Typography,
  Rating,
  FormControl,
  OutlinedInput,
  Button,
  ButtonGroup,
  IconButton,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TableHead,
  Card,
  CardContent,
  Stack,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import animationCart from "../assets/aniCart.gif";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = useContext(AuthContext);
  const [harga, setHarga] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const countUp = (id) => {
    let updatecart = items.filter((item) => {
      if (item._id === id) {
        const price = item.total_price / item.total_food;
        item.total_food += 1;
        item.total_price = price * item.total_food;
        console.log(items);
        return item;
      } else {
        return item;
      }
    });

    console.log(updatecart);
    setItems(updatecart);
  };

  const countDown = (id) => {
    let updatecart = items.filter((item) => {
      if (item._id === id && item.total_food > 1) {
        const price = item.total_price / item.total_food;
        item.total_food -= 1;
        item.total_price = price * item.total_food;
        return item;
      } else {
        return item;
      }
    });

    setItems(updatecart);
  };

  const deleteCart = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/cart/delete/${auth?.userId}/${id}`);
      console.log(response.data);
      console.log(id);
      setItems((prevCart) => prevCart.filter((item) => id !== item.food_id));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const cart = await axios.get(`http://localhost:3000/cart/${auth.userId}`);
      console.log(cart.data.data);
      setItems(cart?.data?.data?.food);
      setTotal(cart?.data?.data?.total_price_cart);
    } catch (error) {
      console.log(error);
      setItems([]);
    }
  };

  const handleClick = async () => {
    const data = {
      food: items,
    };
    try {
      await axios.post(`http://localhost:3000/cart/update/${auth.userId}`, data);
      navigate("/payments", { state: { prevPath: pathname } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let totalHarga = 0;
    items.forEach((food) => (totalHarga += food.total_price));
    setHarga(totalHarga);
    setTotal(harga + (5 / 100) * harga);
  }, [items, harga]);

  useEffect(() => {
    getItem();
  }, [auth.userId]);

  return items.length > 0 ? (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#232323", border: "none", fontWeight: "bold", fontSize: "18px", width: "60%" }}>Product</TableCell>
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
            {items.map((cart) => (
              <TableRow key={cart._id} sx={{ border: 0 }}>
                <TableCell component="th" scope="row" sx={{ color: "#232323" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img src={cart.photos} alt={cart._id} width="100%" height="auto" />
                    </Grid>
                    <Grid item xs={10} container direction="column">
                      <Typography variant="p" sx={{ color: "#232323", mt: 1, fontWeight: "bold" }}>
                        {cart.name}
                      </Typography>
                      <Rating value={cart.rating} readOnly sx={{ color: "#ff9f0d", mt: 1 }} />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ color: "#232323" }} align="center">
                  <ButtonGroup disableElevation variant="outlined" size="small">
                    <Button sx={{ border: "1px solid #ff9f0d !important", color: "#ff9f0d" }} onClick={() => countUp(cart._id)}>
                      +
                    </Button>
                    <Typography variant="p" sx={{ color: "#", borderTop: "1px solid #ff9f0d", borderBottom: "1px solid #ff9f0d", py: 1, px: 2 }}>
                      {cart.total_food}
                    </Typography>
                    <Button sx={{ border: "1px solid #ff9f0d !important", color: "#ff9f0d" }} onClick={() => countDown(cart._id)}>
                      -
                    </Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell sx={{ color: "#232323" }} align="center">
                  RP. {cart.total_price}
                </TableCell>
                <TableCell sx={{ color: "#232323" }} align="center">
                  <IconButton onClick={() => deleteCart(cart.food_id)}>
                    <CloseIcon sx={{ color: "#232323", "&:hover": { color: "#ff9f0d" } }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={4} sx={{ mt: 4 }} direction="row-reverse">
        <Grid item lg={6} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ color: "#232323" }}>
              Total Payment
            </Typography>
            <Card sx={{ border: " 1px solid #BDBDBD" }} variant="outlined">
              <CardContent>
                <Stack spacing={2} sx={{ mb: 2 }}>
                  <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="p" sx={{ color: "#232323" }}>
                      Cart Subtotal
                    </Typography>
                    <Typography variant="p" sx={{ color: "#232323" }}>
                      Rp. {harga}
                    </Typography>
                  </Box>
                  <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="p" sx={{ color: "#232323", opacity: "0.75" }}>
                      Shipping Charge(Tax 5%)
                    </Typography>
                    <Typography variant="p" sx={{ color: "#232323", opacity: "0.75" }}>
                      RP. {(5 / 100) * harga}
                    </Typography>
                  </Box>
                </Stack>
                <Divider sx={{ width: "100%" }} />
                <Box component="div" sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Typography variant="p" sx={{ color: "#232323" }}>
                    Total Amount
                  </Typography>
                  <Typography variant="p" sx={{ color: "#232323" }}>
                    Rp. {total}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Button variant="contained" sx={{ width: "100%", height: "100%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }} onClick={handleClick}>
              Proceed to Checkout
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Container maxWidth="lg" sx={{ py: "50px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography sx={{ color: "#232323", fontSize: "36px", mt: 4 }}>Your Cart Is Empty</Typography>
          <img src={animationCart} width="80%" height="80%" />
          {/* <Button variant="contained" sx={{ bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d" }, textTransform: "none" }} size="large">
            Go to The Shop
          </Button> */}
        </Box>
      </Box>
    </Container>
  );
};

export default CartItem;
