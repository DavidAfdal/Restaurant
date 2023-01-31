import { Box, Button, Card, CardContent, Container, Divider, InputAdornment, TextField, Typography, CircularProgress } from "@mui/material";
import Modal from "@mui/material/Modal";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Shared/context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterItem = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #ff9f0d",
    boxShadow: 24,
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 4,
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      username: name,
      email,
      password,
    };
    try {
      const user = await axios.post("http://localhost:3000/user/register", data);
      if (user.data.error) {
        setOpen(true);
        setError(user.data.error);
      } else {
        navigate("/Login", { state: { prevPath: pathname } });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(data);
      console.log(error);
      setIsLoading(false);
    }
  };

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
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#232323" }}>
            {error}
          </Typography>
        </Box>
      </Modal>
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
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default RegisterItem;
