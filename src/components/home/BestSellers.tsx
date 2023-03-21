import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import { SiKia } from "react-icons/si";
import { CgBmw } from "react-icons/cg";
import { SiFord } from "react-icons/si";
import { SiBentley } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { TbBrandToyota } from "react-icons/tb";
import { SiTesla } from "react-icons/si";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import car1 from "../../../public/images/products/car1.png";
import LandingTitle from "../custom/LandingTitle";

const StyledTabs = ({
  value,
  handleChange,
}: {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}) => {
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        mt: 5,
        justifyContent: "center",
        borderRadius: "15px",
        boxShadow: (theme) => theme.shadows[2],
      }}
    >
      <Tabs
        sx={{
          "& .MuiTabs-indicator": { display: "none" },
          "& .Mui-selected,& .MuiTabScrollButton-root,.MuiTab-root.Mui-selected ":
            { color: "primary.main" },
          "& .MuiTab-root": { color: "secondary.main" },
          "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: 0.3 },
        }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<SiKia fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<CgBmw fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<SiFord fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<SiBentley fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<SiChevrolet fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<TbBrandToyota fontSize="50px" />}
          label="Item One"
        />
        <Tab
          sx={{ mx: { xs: 1, md: 4 } }}
          icon={<SiTesla fontSize="50px" />}
          label="Item One"
        />
      </Tabs>
    </Paper>
  );
};

const ProductBox = () => {
  return (
    <Paper
     elevation={2}
      sx={{
       
        border: "2px solid #eee",
        '&:hover':{ '& img' : {boxShadow:"-1px 68px 46px -17px rgba(7,3,73,0.45) inset "}}
      }}
    >
      <Stack gap={2} alignItems="center">
        <Box  sx={{ border: "2px solid #eee", borderRadius: "15px",overflow:'hidden',zIndex:15 }}>
          <Image
            src={car1}
            width={270}
            height={200}
            style={{ objectFit: "contain",  transition:'all ease .3s' }}
            alt="car"
          />
        </Box>
        <Stack gap={2} width="100%">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" fontWeight="medium" component="h2">
              مزدا نیو فیس
            </Typography>
            <Button
              color="secondary"
              sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}
            >
              2020
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              color="text.secondary"
            >
              شرکت
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              color="text.primary"
            >
              مزدا
            </Typography>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              color="text.secondary"
            >
              قیمت
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              color="text.primary"
            >
              23000000 تومان
            </Typography>
          </Stack>
        </Stack>
        <Button
          sx={{ mt: 2 }}
          color="secondary"
          size="large"
          variant="contained"
          fullWidth
        >
          جزئیات خودرو
        </Button>
      </Stack>
    </Paper>
  );
};

const BestSellers = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };
  return (
    <Box component="section">
      <LandingTitle position="center" title="پرفروش ترین خودروها" />
      <StyledTabs value={value} handleChange={handleChange} />
      <Box className="bestSellersSwiper" sx={{ postion: "relative", mt: 5 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="bestSellersSwiper"
        >
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
          <SwiperSlide>
            <ProductBox />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default BestSellers;
