import React from "react";
import { Box, Button, Card, CardContent, Container, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

const LoginItem = () => {
  return (
    <Container maxWidth="lg" sx={{ py: "100px", height: "100%" }}>
      <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
        <Card sx={{ width: "350px" }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Login
            </Typography>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>
              <TextField
                placeholder="Email"
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

export default LoginItem;
