import { Box, Button, Stack, Typography } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

import { FiPhoneCall } from "react-icons/fi";

const Intro = () => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Box component="section" 
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        flexWrap="wrap-reverse"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Stack flexBasis="50%" gap={3} alignItems="start"  data-aos="fade-left">
          <Typography
            variant="h3"
            lineHeight={1.6}
            component="h1"
            fontWeight="fat"
          >
            شاهین خودرو بزرگ ترین نمایشگاه آنلاین خودرو
          </Typography>
          <Typography variant="caption" fontWeight='regular' color='text.secondary' fontSize="1.1rem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
          </Typography>
          <Button
            LinkComponent="a"
            href="tel:09361480815"
            size="large"
            sx={{ boxShadow: (theme) => theme.shadows[2] }}
            startIcon={
              <FiPhoneCall style={{ fontSize: "16px" }} />
            }
            variant="contained"
          >
            تماس با ما
          </Button>
        </Stack>
        <Box  data-aos="fade-right">
          <Box
            sx={{
              backgroundColor: "secondary.main",
              width: { xs: "250px", md: "350px", lg: "500px" },
              height: { xs: "250px", md: "400px", lg: "500px" },
              borderRadius: "50px",
              position: "relative",
            }}
          >
            <Image
              src={"/images/home-intro.png"}
              priority
              fill
              style={{ objectFit: "contain", right: "-10%", top: "0" }}
              alt="intro"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Intro;
