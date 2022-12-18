import { Container, Grid, Stack, Typography, Box, Divider, Rating, ButtonGroup, Button, IconButton } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import Review from "./Review";

const ProdukDetails = ({ menu, onNext, onPrev, recomend }) => {
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
  const handleClick = (id) => {
    setThumbId(id);
  };

  const upCount = () => {
    setCount(count + 1);
    console.log(count);
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

  console.log(recomend);
  return (
    <Container maxWidth="lg" sx={{ py: "100px" }}>
      <Grid container spacing={3}>
        <Grid item container lg={7} xs={12} spacing={2}>
          <Grid item lg={3} xs={2}>
            <Box sx={{ width: { lg: "70%" }, height: "auto", ml: { lg: "auto" } }}>
              <Stack spacing={2}>
                {menu?.listImg?.map((img, i) => (
                  <img src={img} key={i} width="100%" height="auto" onClick={() => handleClick(i)} style={{ cursor: "pointer" }} />
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={9} xs={10}>
            <img src={menu?.listImg[thumbid]} width="100%" height="auto" />
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
              {menu?.price}
            </Typography>

            <Stack spacing={2} direction="row">
              <Rating name="read-only" value={menu?.rating} readOnly />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography sx={{ color: "#232323", fontSize: "18px", opacity: "0.75" }}>{parseFloat(menu?.rating).toFixed(1)} Rating</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography sx={{ color: "#232323", fontSize: "18px", opacity: "0.75" }}>{menu?.rating} Review</Typography>
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
      <Review desc={menu?.desc} review={menu?.category} />
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
          <Box sx={{ cursor: "pointer", mr: 2 }} onClick={() => handleRecomnd(recomend?.id)} key={recomend.id}>
            <Stack gap={1}>
              <img src={recomend?.thumbImg} alt={recomend?.name} width="100%" height="auto" />
              <Typography variant="p" sx={{ color: "#232323", fontSize: "18px" }}>
                {recomend?.name}
              </Typography>
              <Typography variant="p" sx={{ color: "#ff9f0d" }}>
                {recomend?.price}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default ProdukDetails;
