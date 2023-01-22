import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarAdmin from "../components/NavbarAdmin";
import { Grid, TextField, Typography, OutlinedInput, Button, Rating, Paper } from "@mui/material";
import { Stack } from "@mui/system";

const AddFoodPage = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const handleFile = (e) => {
    const files = e.target.files;
    setFile(files);
  };

  useEffect(() => {
    const selectedFiles = Array.from(file);
    const imageArray = selectedFiles.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewUrl(imageArray);
    return () => {
      URL.revokeObjectURL(file);
    };
  }, [file]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarAdmin />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#E8E8E8", px: 3, height: { md: "100vh", xs: "100%" }, pt: 10 }}>
        <form encType="multipart/form-data">
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <Paper sx={{ p: 3 }}>
                <Typography sx={{ color: "#232323", fontSize: "2rem" }}>Penambahan Food</Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Stack direction={{ md: "row", xs: "column" }} spacing={2} flexWrap="nowrap">
                    <TextField id="outlined-basic" label="Nama Makanan" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Harga Makanan" variant="outlined" fullWidth />
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
                  </Stack>
                  <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
                    <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth minRows={6} maxRows={25} multiline />
                    <TextField id="outlined-basic" label="Long Description" variant="outlined" fullWidth minRows={6} maxRows={25} multiline />
                  </Stack>
                  <Button variant="contained" component="span" sx={{ bgcolor: "#ff9f0d", color: "#fff", "&:hover": { bgcolor: "#ff9f0d" } }} onClick={() => console.log(previewUrl)}>
                    Upload
                  </Button>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <input style={{ display: "none" }} id="raised-button-file" multiple type="file" onChange={handleFile} />
                  <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" sx={{ bgcolor: "#ff9f0d", color: "#fff", "&:hover": { bgcolor: "#ff9f0d" } }}>
                      Add Image
                    </Button>
                  </label>

                  <Grid container rowGap={2}>
                    {previewUrl?.map((file, index) => (
                      <Grid item xs={12} md={6} key={index} sx={{ pr: { xs: 0, lg: 2 } }}>
                        <img src={file} alt={file} width="100%" height="100%" />;
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddFoodPage;
