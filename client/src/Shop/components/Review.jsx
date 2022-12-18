import React from "react";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

const Review = ({ desc, review }) => {
  const [value, setValue] = useState("desc");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: "40px" }}>
      <TabContext value={value}>
        <Box>
          <Tabs value={value} onChange={handleChange} sx={{ "& .MuiTabs-indicator": { backgroundColor: "#ff9f0d !important" }, "& .Mui-selected": { color: "#ff9f0d !important" } }}>
            <Tab value="desc" label="Description" sx={{ color: "#232323", mr: 4, textTransform: "capitalize", fontSize: "18px" }} />
            <Tab value="review" label={`Review (${review?.length})`} sx={{ color: "#232323", textTransform: "capitalize", fontSize: "18px" }} />
          </Tabs>
        </Box>
        <TabPanel value="desc" sx={{ pl: 0 }}>
          <Typography variant="body1" sx={{ color: "#232323", fontSize: "18px" }}>
            {desc}
          </Typography>
        </TabPanel>
        <TabPanel value="review">
          {/* {review?.map((review, index) => (
            <Stack direction="row"></Stack>
          ))} */}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Review;
