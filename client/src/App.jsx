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
import AddFoodPage from "./Admin/page/AddFoodPage.jsx";
import AddDiscountPage from "./Admin/page/AddDiscountPage.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, SetIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uId) => {
    setIsLogin(true);
    setUserId(uId);
    sessionStorage.setItem("userData", JSON.stringify({ userId: uId }));
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
    setUserId(null);
    sessionStorage.removeItem("userData");
  }, []);

  const adminLogin = useCallback(() => {
    sessionStorage.setItem("admin", JSON.stringify({ name: "admin", password: "admin" }));
    SetIsAdmin(true);
  }, []);

  const adminLogout = () => {
    sessionStorage.removeItem("admin");
    SetIsAdmin(false);
  };

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("userData"));
    if (storedData) {
      login(storedData.userId);
    }
  }, [login]);

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("admin"));
    if (storedData) {
      adminLogin();
    }
  }, [adminLogin]);

  let router = (
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

  if (isAdmin) {
    console.log(isAdmin);
    router = (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/addfood" element={<AddFoodPage />} />
          <Route path="/adddiscount" element={<AddDiscountPage />} />
          <Route path="*" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return <AuthContext.Provider value={{ isLoggedIn: !!isLogin, userId, login, logout, adminLogin, adminLogout, isAdmin }}>{router}</AuthContext.Provider>;
}

export default App;
