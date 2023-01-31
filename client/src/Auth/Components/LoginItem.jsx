import React, { useState } from "react";
import { Box, Button, Card, CardContent, Container, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginItem = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      auth.adminLogin();
      navigate("/");
    } else {
      const data = {
        email: email,
        password: password,
      };

      try {
        const user = await axios.post("http://localhost:3000/user/login", data);
        console.log(user);
        auth.login(user.data.data._id);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
        <Card sx={{ width: "350px" }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Login
            </Typography>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }} onSubmit={handleClick}>
              <TextField
                placeholder="Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockPersonOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained" type="submit" sx={{ width: "100%", height: "100%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }}>
                Submit
              </Button>
            </form>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Typography variant="p" sx={{ color: " #828282", fontSize: "14px" }}>
                Forget password?
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginItem;
