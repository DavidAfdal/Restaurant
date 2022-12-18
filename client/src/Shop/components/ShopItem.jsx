import React, { useEffect, useState } from "react";
import { Box, Container, Select, FormControl, MenuItem, Typography, Grid, Slider, OutlinedInput, Pagination, InputAdornment, IconButton, Checkbox, FormGroup, FormControlLabel, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import { ItemMenu } from "../Dummydata";

const ShopItem = () => {
  //variables
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sort, setSort] = useState("Rating");
  const [show, setShow] = useState("Default");
  const [randomIndex, setRandomIndex] = useState(0);
  const [filterMenu, setFilterMenu] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(10);
  const sortBy = ["Rating", "Newest", "Latest"];
  const showBy = ["Default", "Ascending", "Descending"];
  const checkbox = ["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg"];

  //functions
  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };

  const handleShow = (e) => {
    setShow(e.target.value);
    console.log(show);
  };

  const handleClick = (id) => {
    navigate(`/menu/${id}`, { state: { prevPath: pathname } });
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilterMenu([...filterMenu, value]);
    } else {
      setFilterMenu(filterMenu.filter((e) => e !== value));
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
    console.log(price);
    setSearch("");
  };

  const handlePage = (e, value) => {
    setPage(value);
  };

  const handleSlider = (e, value) => {
    setPrice(value);
  };

  useEffect(() => {
    const random = setInterval(() => setRandomIndex(Math.floor(Math.random() * ItemMenu.length)), 10000);
    return () => clearInterval(random);
  }, []);

  return (
    <Container sx={{ py: "100px" }}>
      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="p" sx={{ color: "#232323" }}>
            Sort By :
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <Select value={sort} onChange={handleSort} displayEmpty>
              {sortBy.map((Sort, index) => (
                <MenuItem value={Sort} key={index} sx={{ backgroundColor: "#fff !important" }}>
                  {Sort}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="p" sx={{ color: "#232323" }}>
            Show :
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <Select value={show} onChange={handleShow} displayEmpty>
              {showBy.map((Show, index) => (
                <MenuItem value={Show} key={index}>
                  {Show}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mt: 1 }} direction={{ xs: "column-reverse", md: "row", lg: "row" }}>
        {/* item menu */}
        <Grid item container lg={9} md={6} spacing={2} sx={{ height: "100%" }}>
          {ItemMenu.map((menu) => (
            <Grid item xs={4} key={menu.id}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }} onClick={() => handleClick(menu.id)}>
                <img src={menu.thumbImg} alt={menu.name} width="100%" height="auto" />
                <Typography variant="p" sx={{ color: "#232323", fontSize: "18px" }}>
                  {menu.name}
                </Typography>
                <Typography variant="p" sx={{ color: "#ff9f0d" }}>
                  {menu.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* akhir item menu */}

        {/* fitur filtering */}
        <Grid item lg={3} md={6}>
          {/* search input */}
          <FormControl sx={{ m: 1 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={search}
              onChange={handleInput}
              placeholder="Search Product"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" sx={{ color: "#ff9f0d" }} onClick={handleSubmit}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                backgroundColor: "rgba(255, 159, 13, 0.1);",
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              }}
            />
          </FormControl>
          {/* akhir search input */}

          {/* checkbox filter */}
          <FormControl sx={{ m: 2 }}>
            <Typography variant="p" sx={{ color: "#232323", fontWeight: "bold" }}>
              Category
            </Typography>
            <FormGroup>
              {checkbox.map((item, index) => (
                <FormControlLabel key={index} label={item} control={<Checkbox value={item} onChange={handleCheckBox} sx={{ "&.Mui-checked": { color: "#ff9f0d" }, color: "#232323" }} />} sx={{ color: "#232323" }} />
              ))}
            </FormGroup>
          </FormControl>
          {/* akhir checkbox filter */}

          {/* Rekomendasi Menu */}
          <Box sx={{ position: "relative", m: 2, display: { xs: "none", lg: "flex" } }}>
            <Box component="img" src={ItemMenu[randomIndex].thumbImg} width="100%" height="auto" sx={{ display: { xs: "none", md: "flex" } }} />
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.611)" }} />
            <Box sx={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
                <Typography variant="p" sx={{ color: "#fff", fontSize: "24px", fontWeight: "bold", mb: 1 }}>
                  {ItemMenu[randomIndex].name}
                </Typography>
                <Typography variant="p" sx={{ color: "#ff9f0d", fontSize: "18px" }}>
                  {ItemMenu[randomIndex].price}
                </Typography>
              </Box>
              <Button variant="text" sx={{ maxWidth: "70%", mr: "auto", ml: 1, mb: 1, color: "#fff", display: "flex", alignItems: "center" }} onClick={() => handleClick(ItemMenu[randomIndex].id)} endIcon={<ArrowCircleRightOutlinedIcon />}>
                Shop Now
              </Button>
            </Box>
          </Box>
          {/* akhir Rekomendasi Menu */}

          {/* filter by price */}
          <Box sx={{ m: 2 }}>
            <Typography variant="p" sx={{ color: "#232323", fontWeight: "bold" }}>
              Filter By Price
            </Typography>
            <Slider defaultValue={price} valueLabelDisplay="auto" onChange={handleSlider} step={5} min={5} max={100} sx={{ color: "#ff9f0d", "& .MuiSlider-valueLabel": { backgroundColor: "#ff9f0d !important" } }} />
            <Typography variant="p" sx={{ color: "#1E1E1E", opacity: "0.6" }}>
              From $5 to $100
            </Typography>
          </Box>
          {/* filter by price */}
        </Grid>
        {/* akhir fitur filtering */}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
        <Pagination count={10} shape="rounded" page={page} onChange={handlePage} variant="outlined" />
      </Box>
    </Container>
  );
};

export default ShopItem;
