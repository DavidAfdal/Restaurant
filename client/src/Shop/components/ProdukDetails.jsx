import { Container, Grid, Stack, Typography, Box, Divider, Rating, ButtonGroup, Button, IconButton, CircularProgress } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Slider from "react-slick";
import { useNavigate, useLocation, Await } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Review from "./Review";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";

const ProdukDetails = ({ menu, onNext, onPrev, recomend, loading }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };
  const slider = useRef(null);
  const [thumbid, setThumbId] = useState(0);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id) => {
    setThumbId(id);
  };

  const upCount = () => {
    setCount(count + 1);
    console.log(count);
    console.log(parseFloat(menu?.rating));
    console.log(recomend);
  };

  const downCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
    console.log(count);
  };

  const handleRecomnd = (id) => {
    navigate(`/Menu/${id}`, { state: { prevPath: pathname } });
    console.log("hello");
  };

  const handelClickAddCart = async () => {
    const data = {
      total_price: menu?.price * count,
      total_food: count,
    };

    try {
      const cart = await axios.post(`http://localhost:3000/cart/add/${auth?.userId}/${menu?._id}`, data);
      console.log(cart);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loading) {
      setThumbId(0);
    }
  }, [loading]);

  return loading === true || isLoading === true ? (
    <Container maxWidth="lg" sx={{ py: "250px", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress sx={{ color: "#ff9f0d" }} size={70} />
      </Box>
    </Container>
  ) : (
    <Container maxWidth="lg" sx={{ py: "100px" }}>
      <Grid container spacing={3}>
        <Grid item container lg={7} xs={12} spacing={2}>
          <Grid item lg={3} xs={2}>
            <Box sx={{ width: { lg: "70%" }, height: "auto", ml: { lg: "auto" } }}>
              <Stack spacing={2}>
                {menu?.photos?.map((img, i) => (
                  <img src={img.url} key={img._id} width="100%" height="auto" onClick={() => handleClick(i)} style={{ cursor: "pointer" }} />
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={9} xs={10}>
            <img src={menu?.photos[thumbid]?.url} width="100%" height="auto" style={{ aspectRatio: 4 / 3 }} />
          </Grid>
        </Grid>
        <Grid item lg={5} xs={12}>
          <Stack spacing={2}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Box sx={{ background: "#ff9f0d", pt: "5px", px: 2, borderRadius: "4px" }}>
                <Typography sx={{ fontSize: "18px", p: 0 }}>In stock</Typography>
              </Box>
              <Stack direction="row">
                <Button variant="text" sx={{ color: "#232323" }} startIcon={<ArrowBackOutlinedIcon />} onClick={onPrev}>
                  Prev
                </Button>
                <Button variant="text" sx={{ color: "#232323" }} endIcon={<ArrowForwardOutlinedIcon />} onClick={onNext}>
                  Next
                </Button>
              </Stack>
            </Box>
            <Typography variant="h2" sx={{ color: "#232323", mt: "0px !important", fontSize: "48px" }}>
              {menu?.name}
            </Typography>
            <Typography sx={{ color: "#232323", mt: "10px !important", fontSize: "18px", textAlign: "justify" }}>{menu?.desc}</Typography>
            <Divider />
            <Typography variant="h2" sx={{ color: "#232323", mt: "30px !important", fontWeight: "bold", fontSize: "32px" }}>
              Rp.{menu?.price}
            </Typography>

            <Stack spacing={2} direction="row">
              <Rating name="read-only" value={parseInt(menu?.rating)} readOnly />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography sx={{ color: "#232323", fontSize: "18px", opacity: "0.75" }}>{parseFloat(menu?.rating).toFixed(1)} Rating</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography sx={{ color: "#232323", fontSize: "18px", opacity: "0.75" }}>{menu?.review.length} Review</Typography>
            </Stack>

            <Stack spacing={3} direction="row">
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button sx={{ border: "1px solid #828282 !important", color: "#828282" }} onClick={downCount}>
                  -
                </Button>
                <Typography sx={{ color: "#232323", borderTop: "1px solid #828282", borderBottom: "1px solid #828282", py: 1, px: 3 }}>{count}</Typography>
                <Button sx={{ border: "1px solid #828282 !important", color: "#828282" }} onClick={upCount}>
                  +
                </Button>
              </ButtonGroup>
              <Button
                variant="contained"
                onClick={handelClickAddCart}
                startIcon={<LocalMallOutlinedIcon />}
                sx={{ borderRadius: "4px", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none", justifyContent: "flex-start", textTransform: "capitalize" }}
              >
                Add to cart
              </Button>
            </Stack>

            <Divider sx={{ mt: "30px !important" }} />
            <Stack>
              <Typography sx={{ color: "#232323", fontSize: "18px", textTransform: "capitalize" }}>Category : {menu?.category.join(", ")}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Review desc={menu?.desc} review={menu?.review} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "50px", alignItems: "center" }}>
        <Typography variant="h4" sx={{ color: "#232323" }}>
          Similar Products
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="prev" size="medium" onClick={() => slider?.current?.slickPrev()}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton aria-label="next" size="medium" sx={{ bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d" } }} onClick={() => slider?.current?.slickNext()}>
            <ArrowForwardOutlinedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>
      </Box>
      <Slider ref={slider} {...settings} style={{ marginTop: "50px" }} className="recomend_Slider">
        {recomend?.map((recomend) => (
          <Box
            sx={{ cursor: "pointer", mr: 2 }}
            onClick={() => {
              handleRecomnd(recomend?._id);
            }}
            key={recomend?._id}
          >
            <Stack gap={1}>
              <img src={recomend?.photos[0]?.url} alt={recomend?.name} width="100%" height="auto" />
              <Typography variant="p" sx={{ color: "#232323", fontSize: "18px" }}>
                {recomend?.name}
              </Typography>
              <Typography variant="p" sx={{ color: "#ff9f0d" }}>
                Rp.{recomend?.price}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default ProdukDetails;
