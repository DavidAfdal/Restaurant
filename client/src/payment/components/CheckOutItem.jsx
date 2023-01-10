import { Button, Container, Grid, Stack, TextField, Typography, FormControl, OutlinedInput, ButtonGroup, Card, CardContent, Box, Modal, Divider, Select, MenuItem, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOutItem = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const auth = useContext(AuthContext);
  const [carts, setCarts] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [getIdDiscount, setGetIdDiscount] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [discount, setDiscount] = useState({
    name: "",
    id: "",
    discount: 0,
    quantity: 0,
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setGetIdDiscount(value);
  };

  const getDataCart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/${auth?.userId}`);
      setCarts(response?.data?.data?.food);
      setSubTotal(response?.data?.data?.total_price_cart);
    } catch (error) {
      console.log(error);
    }
  };

  const getDiscount = async () => {
    try {
      const response = await axios.get("http://localhost:3000/discount/");
      setDiscounts(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyDiscounts = () => {
    const discount = discounts.filter((x) => x._id === getIdDiscount);
    discount.map((discount) =>
      setDiscount({
        name: discount.name,
        discount: discount.discount,
        id: discount._id,
        quantity: discount.quantity,
      })
    );
    console.log(discount);
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/", { state: { prevPath: pathname } });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phone,
        company,
        country,
        city,
        zip_code: zipCode,
        address_1: address1,
        address_2: address2,
      };
      const response = await axios.post(`http://localhost:3000/shipping/${auth.userId}?disc=${discount.id}`, data);
      console.log(response);
      setIsloading(false);
      setOpen(true);
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  const backToCart = () => {
    navigate("/cart", { state: { prevPath: pathname } });
  };

  useEffect(() => {
    getDataCart();
    getDiscount();
  }, [auth.userId]);

  useEffect(() => {
    setTotal(subTotal + subTotal * (5 / 100) - (discount.discount / 100) * subTotal);
  }, [subTotal, discount]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ color: "#232323" }}>
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "#232323" }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {isLoading ? (
        <Container maxWidth="lg" sx={{ py: "250px", height: "100vh" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress sx={{ color: "#ff9f0d" }} size={70} />
          </Box>
        </Container>
      ) : (
        <Container sx={{ py: "100px" }}>
          <form onSubmit={submitOrder}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={8}>
                <Stack spacing={2}>
                  <Typography sx={{ color: "#232323" }}>Shipping Address</Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth onChange={(e) => setFirstName(e.target.value)} />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth onChange={(e) => setLastName(e.target.value)} />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth onChange={(e) => setPhone(e.target.value)} />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="Company" variant="outlined" fullWidth onChange={(e) => setCompany(e.target.value)} />
                    <TextField id="outlined-basic" label="Country" variant="outlined" fullWidth onChange={(e) => setCountry(e.target.value)} />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="City" variant="outlined" fullWidth onChange={(e) => setCity(e.target.value)} />
                    <TextField id="outlined-basic" label="Zip Code" variant="outlined" fullWidth onChange={(e) => setZipCode(e.target.value)} />
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <TextField id="outlined-basic" label="Adress 1" variant="outlined" fullWidth onChange={(e) => setAddress1(e.target.value)} />
                    <TextField id="outlined-basic" label="Adress 2" variant="outlined" fullWidth onChange={(e) => setAddress2(e.target.value)} />
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
                              <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                value={getIdDiscount}
                                onChange={handleChange}
                                input={<OutlinedInput placeholder="Enter Here code" sx={{ width: "100%", borderRadius: "4px 0 0 4px" }} />}
                              >
                                {discounts.map((discount) => (
                                  <MenuItem key={discount._id} value={discount._id}>
                                    {discount.name}
                                  </MenuItem>
                                ))}
                              </Select>

                              <Button variant="contained" sx={{ width: "20%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }} onClick={applyDiscounts}>
                                Apply
                              </Button>
                            </ButtonGroup>
                          </FormControl>
                        </CardContent>
                      </Card>
                    </Box>
                  </Stack>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#ff9f0d", color: "#fff", boxShadow: "none", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, textTransform: "none", display: { xs: "none", md: "flex" } }}
                    onClick={backToCart}
                  >
                    <ArrowBackIosIcon fontSize="small" />
                    Back to cart
                  </Button>
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
                        <Typography>Rp. {(discount.discount / 100) * subTotal}</Typography>
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
                      <Button sx={{ display: "flex", alignItems: "center", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d" }, textTransform: "none", gap: "5px" }} variant="contained" type="submit">
                        Place an Order
                        <ArrowForwardIcon sx={{ color: "#fff" }} fontSize="small" />
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ bgcolor: "#ff9f0d", color: "#fff", boxShadow: "none", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, textTransform: "none", display: { xs: "flex", md: "none" }, mt: 2 }}
                  onClick={backToCart}
                >
                  <ArrowBackIosIcon fontSize="small" />
                  Back to cart
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  );
};

export default CheckOutItem;
