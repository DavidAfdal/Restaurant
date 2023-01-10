import React, { useState, useContext, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import "./Navbar.scss";
import { Badge } from "@mui/material";
import { AuthContext } from "../context/auth-context";
import axios from "axios";

const pages = ["Home", "Shop", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [path, setPath] = useState("");
  const [itemCart, setItemCart] = useState(0);

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCartClick = () => {
    navigate("/Cart", { state: { prevPath: pathname } });
  };

  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };

  const cartItem = async () => {
    try {
      const cart = await axios.get(`http://localhost:3000/cart/${auth?.userId}`);
      setItemCart(cart?.data?.data?.food?.length);
      console.log(cart);
    } catch (error) {
      console.log(error);
      setItemCart(0);
    }
  };

  useEffect(() => {
    cartItem();
  }, [auth.userId, itemCart]);

  return (
    <div>
      <AppBar position="relative" sx={{ backgroundColor: "#0D0D0D" }} style={{ zIndex: 100 }} elevation={path === "Home" ? 0 : 12}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                flexGrow: { xs: 1, md: 0 },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Food<span style={{ color: "#FF9F0D" }}>tuck</span>
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <ul key={page} className="nav_list">
                  <li>
                    <Link to={page !== "Home" ? `/${page}` : "/"} state={{ prevPath: pathname }} className="nav_link">
                      {page}
                    </Link>
                  </li>
                </ul>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              {auth.isLoggedIn ? (
                <Tooltip title="User Info">
                  <IconButton onClick={handleOpenUserMenu} sx={{ mr: 2 }}>
                    <PersonOutlineOutlinedIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Button variant="text" onClick={() => navigate("/Register", { state: { prevPath: pathname } })} sx={{ textTransform: "capitalize", color: "#fff", mr: 2 }}>
                  Register
                </Button>
              )}

              {auth.isLoggedIn ? (
                <Tooltip title="Cart">
                  <IconButton sx={{ mr: 2 }} onClick={handleCartClick}>
                    <Badge badgeContent={itemCart} color="secondary" sx={{ "& .MuiBadge-badge": { backgroundColor: "#FF9F0D" }, color: "#fff" }}>
                      <ShoppingCartOutlinedIcon sx={{ color: "#fff" }} />
                    </Badge>
                  </IconButton>
                </Tooltip>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => navigate("/Login", { state: { prevPath: pathname } })}
                  sx={{ textTransform: "capitalize", color: "#FF9F0D", borderColor: "#FF9F0D", "&:hover": { borderColor: "#FF9F0D !important" } }}
                >
                  Login
                </Button>
              )}

              <Menu
                sx={{ mt: "45px", "& .MuiMenu-list": { backgroundColor: "#0d0d0d !important" } }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ backgroundColor: "#0D0D0D", color: "#fff", "&:hover": { color: "#FF9F0D" } }}>
                    {setting === "Logout" ? (
                      <Box onClick={logoutHandler}>
                        <Typography className="nav_Auth">{setting}</Typography>
                      </Box>
                    ) : (
                      <Link to={setting} state={{ prevPath: pathname }} className="nav_Auth">
                        {setting}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={anchorElNav} onClose={handleCloseNavMenu} sx={{ "& .MuiDrawer-paper": { width: { xs: "50%", lg: "100%" }, backgroundColor: "#0d0d0d" }, display: { xs: "flex", md: "none" } }}>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            p: 4,
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Food<span style={{ color: "#FF9F0D" }}>tuck</span>
        </Typography>
        <ul className="nav_list_drawer">
          {pages.map((page) => (
            <li key={page} style={{ marginBottom: "10px" }}>
              <Link to={page !== "Home" ? `/${page}` : "/"} state={{ prevPath: pathname }} className="nav_link">
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;

{
  /* <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 0 }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */
}
