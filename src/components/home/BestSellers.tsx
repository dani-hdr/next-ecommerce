import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


import LandingTitle from "../custom/LandingTitle";
import { toPersianCurrency } from "@/utils/toPersianCurrency";
import Aos from "aos";

import carData, { car } from '../../__mock__/products'
import chassisTypesData from '../../__mock__/chassisTypes'
import Link from "next/link";

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
       {chassisTypesData.map((item,i)=>  <Tab key={item.id}
          sx={{ mx: { xs: 1, md: 4,fontSize:'1.2rem',fontWeight:'bold' } }}
          icon={<Image src={item.iconUrl} height={65} width={65} alt={item.name}/>}
          label={item.name}
        />)}
      
      </Tabs>
    </Paper>
  );
};

const ProductItem = ({car}:{car:car}) => {
  return (
    <Paper
     elevation={2}
      sx={{
       p:2,
        border: "2px solid #eee",
        '&:hover':{ '& img' : {boxShadow:"-1px 68px 46px -17px rgba(7,3,73,0.45) inset "}}
      }}
    >
      <Stack gap={2} alignItems="center">
        <Box  sx={{ border: "2px solid #eee",height:250, borderRadius: "15px",overflow:'hidden',zIndex:15 }}>
          <Image
            src={car.thumbnail}
            width={270}
            height={200}
            style={{ objectFit: "contain",  transition:'all ease .3s' }}
            alt={car.name}
          />
        </Box>
        <Stack gap={2} width="100%">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold" component="h2">
              {car.name}
            </Typography>
            <Button
              color="secondary"
              
              sx={{ backgroundColor: (theme) => theme.palette.secondary.light,fontWeight:'bold' }}
            >
              {car.year}
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
              {car.brand}
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
              fontWeight="bold"
              color="text.primary"
            >
              {toPersianCurrency(car.price)}
            </Typography>
          </Stack>
        </Stack>
        <Button
         LinkComponent={Link}
         href={`/products/${car.id}`}
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
  const [cars,setCars]=useState<car[]>([])

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  useEffect(()=>{
      setCars(carData)
  },[])
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <Box component="section" data-aos="fade-down">
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
          {cars.map(car=>(
              <SwiperSlide key={car.id}>
                 <ProductItem car={car}  />
              </SwiperSlide>
          ))}
         
        </Swiper>
      </Box>
    </Box>
  );
};

export default BestSellers;
