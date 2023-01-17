import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Auth/Pages/Register.jsx";
import Login from "./Auth/Pages/Login.jsx";

import Navbar from "./Shared/components/Navbar.jsx";
import Home from "./Home/pages/Home.jsx";
import Page404 from "./Shared/Page404";
import Shop from "./Shop/Page/Shop";
import Cart from "./Shop/Page/CartPage";
import Produk from "./Shop/Page/Produk.jsx";
import Chef from "./Chef/Page/Chef.jsx";
import { AuthContext } from "./Shared/context/auth-context.jsx";
import { useEffect, useState, useCallback } from "react";

import CheckOut from "./payment/page/CheckOut.jsx";
import Footer from "./Shared/components/Footer.jsx";
import AdminPage from "./Admin/page/AdminPage.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, SetIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uId) => {
    setIsLogin(true);
    setUserId(uId);
    localStorage.setItem("userData", JSON.stringify({ userId: uId }));
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  const adminLogin = useCallback(() => {
    SetIsAdmin(true);
  }, []);

  const adminLogout = () => {
    SetIsAdmin(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      login(storedData.userId);
    }
  }, [login]);

  useEffect(() => {
    adminLogin();
  }, [adminLogin]);

  let router;

  if (isAdmin) {
    console.log(isAdmin);
    router = (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />;
        </Routes>
      </BrowserRouter>
    );
  } else {
    router = (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/payments" element={<CheckOut />} />
          <Route path="/menu/:menuId" element={<Produk />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  return <AuthContext.Provider value={{ isLoggedIn: !!isLogin, userId, login, logout, adminLogin, adminLogout, isAdmin }}>{router}</AuthContext.Provider>;
}

export default App;
