import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Auth/Pages/Register.jsx";
import Login from "./Auth/Pages/Login.jsx";

import Navbar from "./components/Navbar.jsx";
import Home from "./Home/pages/Home.jsx";
import Page404 from "./Shared/Page404";
import Shop from "./Shop/Page/Shop";
import Cart from "./Shop/Page/CartPage";
import Produk from "./Shop/Page/Produk.jsx";
import Chef from "./Chef/Page/Chef.jsx";
import { AuthContext } from "./Shared/context/auth-context.jsx";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = (uId) => {
    setIsLogin(true);
    setUserId(uId);
  };

  const logout = () => {
    setIsLogin(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!isLogin, userId, login, logout }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/menu/:menuId" element={<Produk />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
