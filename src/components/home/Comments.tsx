import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,Autoplay } from "swiper";

import { FiArrowLeft } from "react-icons/fi";
import LandingTitle from "../custom/LandingTitle";
import { useEffect } from "react";
import Aos from "aos";

const CommentBox = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", borderRadius: "15px", p: 3 }}>
      <Stack gap={2}>
        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            sx={{ width: 70, height: 70 }}
            alt="Remy Sharp"
            src="/images/avatars/1.jpg"
          />
          <Stack gap={1}>
            <Typography variant="h6" color="white">
              محمد جلالی فر
            </Typography>
            <Rating size="small" name="read-only" value={5} readOnly />
          </Stack>
        </Stack>
        <Typography
          textAlign="start"
          color="white"
          fontWeight="thin"
          variant="subtitle1"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </Typography>
        <AvatarGroup
          sx={{ "& .MuiAvatar-root:last-child": { marginLeft: "-8px" } }}
          max={4}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Stack>
    </Box>
  );
};
const Comments = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Box component="section" data-aos="fade-down">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          {" "}
          <Stack alignItems="start" gap={2}>
            <LandingTitle title=" از زبان مشتریان ما بشنوید" position="right"/>

            <Typography variant="subtitle1" color="text.secondary">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </Typography>
            <Button
              component={Link}
              href="/"
              color="secondary"
              endIcon={<FiArrowLeft style={{ marginRight: "10px" }} />}
              size="large"
            >
              مشاهده همه نظرات
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="commentsSwiper" sx={{ height: "300px" }}>
            <Swiper
              direction="vertical"
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay:3000
              }}
              modules={[Pagination,Autoplay]}
              className="commentsSwiper"
            >
              <SwiperSlide>
                <CommentBox />
              </SwiperSlide>
              <SwiperSlide>
                <CommentBox />
              </SwiperSlide>
              <SwiperSlide>
                <CommentBox />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Comments;
