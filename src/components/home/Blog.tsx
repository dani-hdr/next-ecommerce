import React from "react";
import { Box, Stack, Grid, Button, Paper, Backdrop } from "@mui/material";
import { Typography } from "@mui/material";
import { FiArrowLeft } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import LandingTitle from "../custom/LandingTitle";
import { GiBlackBridge } from "react-icons/gi";

const BlogBox = () => {
  return (
    <Link href="/">
      <Paper elevation={2} sx={{ p: 3, '&:hover':{'& .img-overlay':{opacity:1}} }}>
        <Stack gap={1}>
          <Stack direction="row" gap={1} color="#D5D6D6">
            <MdDateRange />
            <Typography>17 آبان 1399</Typography>
          </Stack>
          <Typography
            className="line-clamp-1"
            variant="h6"
            fontWeight="medium"
            component="h3"
          >
            تیتر بلاگ مورد نظر
          </Typography>
          <Typography className="line-clamp-2" variant="subtitle1">
            متن چاپ و با استفاده از طراحان گرافیک با تولید سادگی نامفهموم صنعت
            ...
          </Typography>
         
          <Box
           className="image-container"
            sx={{
              overflow:'hidden',
              borderRadius: "15px",
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              mb: "-70px",
              mt: 1,
            }}
          >
           <div className="img-overlay"></div>
            <Image
               
              fill
              style={{ objectFit: "cover", borderRadius: "15px" }}
              src="/images/blog/1.jpg"
              alt="blog"
            />
          
           
          </Box>
        </Stack>
      </Paper>
    </Link>
  );
};
const Blog = () => {
  return (
    <Box component="section">
      <Stack gap={4}>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          justifyContent="space-between"
        >
          <LandingTitle title="مجله خبری شاهین خودرو" position="right" />
          <Button
            component={Link}
            href="/"
            endIcon={<FiArrowLeft style={{ marginRight: "10px" }} />}
            size="large"
          >
            آرشیو بلاگ
          </Button>
        </Stack>
        <Grid container columnSpacing={3} rowSpacing={10}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogBox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogBox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogBox />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogBox />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Blog;
