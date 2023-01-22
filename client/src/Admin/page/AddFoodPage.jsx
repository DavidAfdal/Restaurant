import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavbarAdmin from "../components/NavbarAdmin";
import { Grid, TextField, Typography, OutlinedInput, Button } from "@mui/material";
import { Stack } from "@mui/system";

const AddFoodPage = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const handleFile = (e) => {
    const files = e.target.files;
    const selectedFiles = Array.from(files);
    const imageArray = selectedFiles.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewUrl(imageArray);
    console.log(imageArray);
    // setFile(files);
  };

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     console.log(fileReader.result);
  //     setPreviewUrl(fileReader.result);
  //   };

  //   fileReader.readAsDataURL(file);
  // }, [file]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavbarAdmin />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", px: 3, height: "100vh", pt: 10 }}>
        <Typography sx={{ color: "#232323", fontSize: "2rem" }}>Penambahan Food</Typography>
        <form encType="multipart/form-data">
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
              <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth minRows={6} maxRows={10} multiline />
              <TextField id="outlined-basic" label="Long Description" variant="outlined" fullWidth minRows={6} maxRows={10} multiline />
            </Stack>

            <Stack spacing={2} sx={{ width: "100%" }}>
              {previewUrl
                ? previewUrl.map((file, i) => {
                    <Box key={i}>
                      <img src={file} alt={file} style={{ width: "100px", height: "100px" }} />;
                    </Box>;
                  })
                : null}
            </Stack>

            <input style={{ display: "none" }} id="raised-button-file" multiple type="file" onChange={handleFile} />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" sx={{ bgcolor: "#ff9f0d", color: "#fff" }}>
                Upload
              </Button>
            </label>
            <Button variant="contained" component="span" sx={{ bgcolor: "#ff9f0d", color: "#fff" }} onClick={() => console.log(previewUrl)}>
              Upload
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AddFoodPage;
