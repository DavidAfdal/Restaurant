import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardContent, Container, Divider, InputAdornment, TextField, Typography, CircularProgress, Modal } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import { useContext } from "react";
import { AuthContext } from "../../Shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const LoginItem = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid red",
    boxShadow: 24,
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    p: 7,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
        if (user.data.error) {
          setEmail("");
          setPassword("");
          setOpen(true);
          setError(user.data.error);
        } else {
          auth.login(user.data.data._id);
          navigate("/");
        }
      } catch (error) {
        setEmail("");
        setPassword("");
        setOpen(true);
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (email.trim() != "" && password.trim() != "") {
      setDisabled(false);
    } else if (email.length <= 1 || password.length <= 1) {
      setDisabled(true);
    }
  }, [email, password]);

  return isLoading ? (
    <Container maxWidth="lg" sx={{ py: "250px", height: "100vh" }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
        <CircularProgress sx={{ color: "#ff9f0d" }} size={70} />
      </Box>
    </Container>
  ) : (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <ErrorOutlineOutlinedIcon sx={{ color: "red", mb: 1 }} fontSize="large" />
          <Typography variant="h6" component="h2" sx={{ color: "#232323", textAlign: "center" }}>
            {error}
          </Typography>
        </Box>
      </Modal>
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

                <Button variant="contained" type="submit" sx={{ width: "100%", height: "100%", borderRadius: "0 4px 4px 0", bgcolor: "#ff9f0d", "&:hover": { bgcolor: "#ff9f0d", boxShadow: "none" }, boxShadow: "none" }} disabled={disabled}>
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
    </>
  );
};

export default LoginItem;
