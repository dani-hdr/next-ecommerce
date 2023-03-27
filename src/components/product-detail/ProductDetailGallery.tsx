import React, { useRef, useState } from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs,Zoom  } from "swiper";
import Image from 'next/image';


const ProductDetailGallery = ({images}:{images:string[]}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const swiperRef = useRef<any>(null);
  const params = {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    zoom: {
      maxRatio: 5,
    },
  }

 
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Box className="productGallerySwiper" maxWidth={{xs:'100%',md:'50%'}} flex={1} sx={{p:3 ,bgcolor:'secondary.light',borderRadius:'20px'}} >
  <Swiper
      {...params}
      ref={swiperRef}
        spaceBetween={10}
        navigation={false}
        zoom={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs,Zoom]}
        className="mySwiper2"
      >
        {images.map((img,i)=> <SwiperSlide key={i}>
          <Image   src={img} width={500} height={500} alt='' />
        </SwiperSlide>)}

      </Swiper>
      <Swiper
      
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        zoom={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs,Zoom]}
        className="mySwiper"
      >
        {images.map((img,i)=> <SwiperSlide key={i}>
        <Image   src={img} width={500} height={500} alt='' />
        </SwiperSlide>)}
        <div className="swiper-button-prev" onClick={handlePrevClick}></div>
        <div className="swiper-button-next" onClick={handleNextClick}></div>
      </Swiper>
     
    </Box>
  )
}

export default ProductDetailGallery