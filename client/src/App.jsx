import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Auth/Pages/Register.jsx";
import Login from "./Auth/Pages/Login.jsx";

import Navbar from "./components/Navbar.jsx";
import Home from "./Home/pages/Home.jsx";
import Page404 from "./Shared/Page404";
import Shop from "./Shop/Page/Shop";
import Produk from "./Shop/Page/Produk.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/menu/:menuId" element={<Produk />} />
=======
        <Route path="/shop" element={<Shop />} />
>>>>>>> 4b1209f7d14ae0653a3f54768f9d0bb0dc6ac03b
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
