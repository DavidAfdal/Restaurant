import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarAdmin from "../components/NavbarAdmin";
import { TextField } from "@mui/material";

const AddDiscountPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarAdmin />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", px: 3, height: "100vh", pt: 10 }}>
        <form>
          <TextField type="text" variant="outlined" />
        </form>
      </Box>
    </Box>
  );
};

export default AddDiscountPage;
