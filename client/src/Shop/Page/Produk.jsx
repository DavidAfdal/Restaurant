import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroItem from "../../Shared/HeroItem";
import ProdukDetails from "../components/ProdukDetails";
import { ItemMenu } from "../Dummydata";
import { useNavigate, useLocation } from "react-router-dom";

const Produk = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const MenuId = useParams().menuId;
  const item = ItemMenu.find((menu) => menu.id == MenuId);
  const index = ItemMenu.findIndex((menu) => menu.id == MenuId);
  const len = ItemMenu.length;

  const menuNavigationDetails = (id) => {
    navigate(`/Menu/${id}`, { state: { prevPath: pathname } });
  };

  return (
    <Box sx={{ bgcolor: "#fff", height: "100%" }}>
      <HeroItem title="Shop Details" to="Details" />
      <ProdukDetails menu={item} onNext={() => menuNavigationDetails(ItemMenu[(index + 1) % len].id)} onPrev={() => menuNavigationDetails(ItemMenu[(index + len - 1) % len].id)} recomend={ItemMenu} />
    </Box>
  );
};

export default Produk;
