import { CardContent, CardMedia, Container, Grid, Typography, Card, CardActions, Button, Box, IconButton } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import blog1 from "../assets/Item2.png";
import blog2 from "../assets/extra3.png";
import blog3 from "../assets/blog1.png";
const Blog = () => {
  const Dummydata = [
    {
      img: blog1,
      date: "10 February 2022 ",
      description: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    },
    {
      img: blog2,
      date: "10 February 2022 ",
      description: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
    {
      img: blog3,
      date: "10 February 2022 ",
      description: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ py: "100px" }}>
      <Typography variant="h5" sx={{ textAlign: "center", fontFamily: "Inter", fontWeight: 400, color: "#ff9f0d", mb: 2 }}>
        Blog Post
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "Helvetica", fontWeight: 700, color: "#fff", lineHeight: "68px", textAlign: "center", mb: 6 }}>
        <span style={{ color: "#ff9f0d" }}>La</span>test News & Blog
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {Dummydata.map((item, index) => (
          <Grid item md={6} lg={4} key={index}>
            <Card sx={{ maxWidth: "400px !important", backgroundColor: "#0D0D0DF2", border: "2px solid #fff" }} variant="outlined">
              <CardMedia component="img" image={item.img} height="400px" sx={{ width: "100% !important" }} />
              <CardContent sx={{ display: "flex", flexDirection: "column", px: 4 }}>
                <Typography variant="p" sx={{ fontWeight: 400, color: "#ff9f0d" }}>
                  {item.date}
                </Typography>
                <Typography variant="p" sx={{ color: "#fff", mt: 2, fontSize: "18px" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
                <Button size="small" variant="text" sx={{ color: "#fff", "&:hover": { color: "#ff9f0d !important" } }}>
                  Lern More
                </Button>
                <Box sx={{ dispal: "flex", alignItems: "center" }}>
                  <IconButton>
                    <ThumbUpOffAltIcon sx={{ color: "#fff !important", "&:hover": { color: "#ff9f0d !important" } }} />
                  </IconButton>
                  <IconButton>
                    <CommentOutlinedIcon sx={{ color: "#fff !important", "&:hover": { color: "#ff9f0d !important" } }} />
                  </IconButton>
                  <IconButton>
                    <ShareOutlinedIcon sx={{ color: "#fff !important", "&:hover": { color: "#ff9f0d !important" } }} />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
