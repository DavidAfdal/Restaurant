import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import NavbarAdmin from "../components/NavbarAdmin";
import { Grid, Paper, Stack } from "@mui/material";

const AdminPage = () => {
  const panel = [
    {
      title: "Jumlah Makanan",
      jumlah: 100,
    },
    {
      title: "Makanan Yang terjual",
      jumlah: 40,
    },
    {
      title: "Makanan Yang tersisa",
      jumlah: 60,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarAdmin />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#E8E8E8", px: 3, height: { xs: "100%", lg: "100vh" }, pt: 10 }}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            {panel.map((file, i) => (
              <Grid item xs={4} key={i}>
                <Paper sx={{ display: "flex", p: 3, justifyContent: "center", alignItems: "center" }}>
                  <Stack alignItems="center">
                    <Typography sx={{ color: "#232323", opacity: 0.5 }}>{file.title}</Typography>
                    <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{file.jumlah}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{ p: 2 }}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
              imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
              bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
              vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
              tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
              eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminPage;
