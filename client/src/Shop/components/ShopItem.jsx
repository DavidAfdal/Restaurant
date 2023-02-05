import React, { useEffect, useState } from "react";
import { Box, Stack, Container, Select, FormControl, MenuItem, Typography, Grid, Slider, OutlinedInput, Pagination, InputAdornment, IconButton, Checkbox, FormGroup, FormControlLabel, Button, Skeleton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useCallback } from "react";

const ShopItem = () => {
  //variables
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menus, setMenus] = useState([]);
  const [sort, setSort] = useState("rating");
  const [show, setShow] = useState("Newest");
  const [totalPage, setTotalPage] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [filterMenu, setFilterMenu] = useState([]);

  const [search, setSearch] = useState({
    menuFilter: [],
    searching: "",
    max: "",
  });

  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(200000);
  const [isLoading, setIsLoading] = useState(false);
  const sortBy = ["rating", "name"];
  const showBy = ["Newest", "Lastest"];
  const checkbox = ["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg"];
  const [category, setCategory] = useState([]);

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
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setSearch({
      menuFilter: [...filterMenu],
      searching: input,
      max: price,
    });
    setInput("");
    console.log(price);
  };

  const handlePage = (e, value) => {
    e.preventDefault();
    setPage(value);
  };

  const handleSlider = (e, value) => {
    setPrice(value);
  };

  useEffect(() => {
    const random = setInterval(() => setRandomIndex(Math.floor(Math.random() * menus.length)), 3000);
    return () => clearInterval(random);
  }, []);

  const getData = useCallback(
    async (search, page, show, sort) => {
      setIsLoading(true);
      try {
        const menu = await axios.get(`http://localhost:3000/food/search?search=${search.searching}&category=${search.menuFilter?.join()}&asc=${show}&orderby=${sort}&max=${search.max}&page=${page}&limit=12`);
        console.log(page);
        console.log(menu.data.payload);
        setMenus(menu.data.payload.data);
        setTotalPage(menu.data.payload.totalPage);
      } catch (error) {
        console.log(error);
      }
      setInterval(() => setIsLoading(false), 3000);
    },
    [search, page, show, sort]
  );

  const getCategory = useCallback(async () => {
    try {
      const category = await axios.get(`http://localhost:3000/food/category`);
      setCategory(category.data.data);
      console.log(category.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData(search, page, show, sort);
    getCategory();
  }, [search, page, show, sort]);

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
                <MenuItem value={Sort} key={index} sx={{ backgroundColor: "#fff !important", textTransform: "capitalize" }}>
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
                <MenuItem value={Show} key={index} sx={{ textTransform: "capitalize" }}>
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
          {menus?.map((menu) => (
            <Grid item xs={4} key={menu._id}>
              {isLoading ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <Skeleton variant="rounded" width="100%" height={180} />
                  <Skeleton variant="rectangular" width="80%" height={20} />
                  <Skeleton variant="rectangular" width="30%" height={20} />
                </Box>
              ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }} onClick={() => handleClick(menu._id)}>
                  <img src={menu.photos[0].url} alt={menu.name} style={{ aspectRatio: 3 / 2, width: "100%", height: "100%" }} />
                  <Typography variant="p" sx={{ color: "#232323", fontSize: "18px" }}>
                    {menu.name}
                  </Typography>
                  <Typography variant="p" sx={{ color: "#ff9f0d" }}>
                    Rp.{menu.price}
                  </Typography>
                </Box>
              )}
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
              value={input}
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
              {category?.map((item, index) => (
                <FormControlLabel
                  key={index}
                  label={item}
                  control={<Checkbox value={item} onChange={handleCheckBox} sx={{ "&.Mui-checked": { color: "#ff9f0d" }, color: "#232323" }} />}
                  sx={{ color: "#232323", textTransform: "capitalize" }}
                />
              ))}
            </FormGroup>
          </FormControl>
          {/* akhir checkbox filter */}

          {/* Rekomendasi Menu */}
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height={180} />
          ) : menus != null ? (
            <Box sx={{ position: "relative", m: 2, display: { xs: "none", lg: "flex" } }}>
              <Box component="img" src={menus[randomIndex]?.photos[0]?.url} width="100%" height="100%" sx={{ display: { xs: "none", md: "flex" } }} />
              <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.611)" }} />
              <Box sx={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
                  <Typography variant="p" sx={{ color: "#fff", fontSize: "24px", fontWeight: "bold", mb: 1 }}>
                    {menus[randomIndex]?.name}
                  </Typography>
                  <Typography variant="p" sx={{ color: "#ff9f0d", fontSize: "18px" }}>
                    {menus[randomIndex]?.price}
                  </Typography>
                </Box>
                <Button variant="text" sx={{ maxWidth: "70%", mr: "auto", ml: 1, mb: 1, color: "#fff", display: "flex", alignItems: "center" }} onClick={() => handleClick(menus[randomIndex]?._id)} endIcon={<ArrowCircleRightOutlinedIcon />}>
                  Shop Now
                </Button>
              </Box>
            </Box>
          ) : null}
          {/* akhir Rekomendasi Menu */}

          {/* filter by price */}
          <Box sx={{ m: 2 }}>
            <Typography variant="p" sx={{ color: "#232323", fontWeight: "bold" }}>
              Filter By Price
            </Typography>
            <Slider value={price} valueLabelDisplay="auto" onChange={handleSlider} step={5000} min={10000} max={200000} sx={{ color: "#ff9f0d", "& .MuiSlider-valueLabel": { backgroundColor: "#ff9f0d !important" } }} />
            <Typography variant="p" sx={{ color: "#1E1E1E", opacity: "0.6" }}>
              From Rp 10000 to Rp 100000
            </Typography>
          </Box>
          {/* filter by price */}
        </Grid>
        {/* akhir fitur filtering */}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
        <Pagination count={totalPage} shape="rounded" page={page} onChange={handlePage} variant="outlined" />
      </Box>
    </Container>
  );
};

export default ShopItem;
