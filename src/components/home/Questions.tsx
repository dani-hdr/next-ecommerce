import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import { IoIosArrowUp } from "react-icons/io";
import LandingTitle from "../custom/LandingTitle";
import { useEffect } from "react";
import Aos from "aos";

const Question = ({summery,details}:{summery:string,details:string}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<IoIosArrowUp />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" fontWeight="medium">
         {summery}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
         {details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
const Questions = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Box component="section" mt={12} data-aos="fade-down">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "start" }}
        justifyContent="space-between"
        gap={5}
      >
        <Box sx={{ position: "relative", width: "50%", aspectRatio: "1/1" }}>
          <Image
            fill
            style={{ objectFit: "contain" }}
            src="/assets/images/question.png"
            alt="question"
          />
        </Box>
        <Stack gap={2} alignItems="start">
          <LandingTitle title="سوالات متداول" position="right" />
          <Box
            sx={{
              "& .MuiAccordion-root": { boxShadow: "none" },
              "& .MuiAccordion-root.Mui-expanded": {
                background: "white",
                border: "2px solid #eee",
                borderRadius: "15px",
              },
            }}
          >
            <Question summery="خودروها چگونه قیمت گذاری میشوند ؟" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"/>
            <Question summery="روند خرید خودرو چگونه است ؟" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"/>
            <Question summery="آیا خودروهای کارکرده را میتوان از شاهین خودرو فروخت ؟" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"/>
            <Question summery="امکان خرید به صورت اقساطی وجود دارد ؟" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"/>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Questions;
