import { Box, Button, Card, CardContent, Container, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Shared/context/auth-context";

const RegisterItem = () => {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async () => {
    setIsLoading(true);
    const data = {
      username: name,
      email,
      password,
    };
    try {
      const user = await axios.post("http://localhost:3000/user/register", data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
        
      </Box>
    </Container>
  ) : (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
        <Card sx={{ width: "350px" }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Sign Up
            </Typography>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }} onSubmit={handelSubmit}>
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Divider sx={{ width: "40%" }} />
              <Typography variant="p" sx={{ width: "20%", textAlign: "center" }}>
                OR
              </Typography>
              <Divider sx={{ width: "40%" }} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default RegisterItem;
