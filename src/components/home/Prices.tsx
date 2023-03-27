import React, { useEffect } from "react";
import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import PriceTable from "./PriceTable";
import LandingTitle from "../custom/LandingTitle";
import Aos from "aos";


const Prices = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <Box component="section" data-aos="fade-down" id="prices">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} lg={4}>
          <Stack flex={1} flexGrow={1} alignItems="start" gap={2}>
           <LandingTitle position="right" title="نوسانات قیمت خودرو"/>  
            <Typography variant="subtitle1" color="text.secondary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </Typography>
            <Button
              component={Link}
              href="/"
              endIcon={<FiArrowLeft style={{ marginRight: "10px" }} />}
              size="large"
            >
              خرید خودرو
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <PriceTable />{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Prices;
