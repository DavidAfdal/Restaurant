import { Box, CircularProgress } from "@mui/material";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroItem from "../../Shared/HeroItem";
import ProdukDetails from "../components/ProdukDetails";
import { ItemMenu } from "../Dummydata";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Produk = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const MenuId = useParams().menuId;
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState();
  const index = menus.findIndex((menu) => menu._id === MenuId);
  const len = menus.length;

  const menuNavigationDetails = (id) => {
    console.log(id);
    navigate(`/Menu/${id}`, { state: { prevPath: pathname } });
  };

  const getMenuById = useCallback(async () => {
    try {
      const menu = await axios.get(`http://localhost:3000/food/${MenuId}`);
      setMenu(menu.data.data);
      console.log(menu);
      console.log(MenuId);
    } catch (error) {
      console.log(error);
    }
  }, [MenuId]);

  const getMenus = async () => {
    try {
      const x = await axios.get(`http://localhost:3000/food/search`);
      setMenus(x.data.payload.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenuById();
    getMenus();
  }, [MenuId]);
  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Shop Details" to="Details" />
      <ProdukDetails menu={menu} onNext={() => menuNavigationDetails(menus[(index + 1) % len]._id)} onPrev={() => menuNavigationDetails(menus[(index + len - 1) % len]._id)} recomend={menus} />
    </Box>
  );
};

export default Produk;
