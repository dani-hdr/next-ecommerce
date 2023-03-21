import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { FiPhoneCall, FiMail, FiArrowLeft } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconType } from "react-icons/lib";

const ContactLink = ({
  text,
  link,
  Icon,
}: {
  text: string;
  link: string;
  Icon: IconType;
}) => {
  return (
    <Button
      startIcon={<Icon />}
      LinkComponent="a"
      href={link}
      variant="text"
      sx={{ color: "white", gap: 1, alignItems: "stretch" }}
    >
      {text}
    </Button>
  );
};
const EmailInput = () => {
  return (
    <TextField
      sx={{ "& .MuiInputBase-root": { background: "white" } }}
      id="outlined-basic"
      placeholder="ایمیلتان را برای عضویت وارد کنید"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={{
                background: (theme) => theme.palette.primary.main,
                borderRadius: "10px",
                color: "white",
                "&:hover": {
                  background: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              {" "}
              <FiArrowLeft />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const AccessLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <>
      <Button
        sx={{
          justifyContent: "space-between",
          gap: { xs: 5, md: 10 },
          color: "white",
        }}
        fullWidth
        LinkComponent={Link}
        href={link}
        variant="text"
        size="large"
      >
        {title}
        <IoIosArrowBack />
      </Button>
      <Divider sx={{ background: "white", opacity: "50%" }} />
    </>
  );
};
const AccessLicense = ({
  link,
  src,
  alt,
}: {
  link: string;
  src: string;
  alt: string;
}) => {
  return (
    <Link href={link}>
      <Image
        width={70}
        height={70}
        style={{ objectFit: "cover", borderRadius: "15px" }}
        src={src}
        alt={alt}
      />
    </Link>
  );
};
const SocialLink = ({link,Icon}:{link:string,Icon:IconType}) => {
  return (
    <IconButton
     LinkComponent='a'
     href={link}
      sx={{
        color: "white",
        background: "#0d1018",
        "&:hover": {
          background: (theme) => theme.palette.primary.main,
        },
      }}
    >
      <Icon />
    </IconButton>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="black"
      pt={5}
      pb={3}
      color="white"
      sx={{ borderRadius: "50px 50px 0 0", mt: 5 }}
    >
      <Container maxWidth="lg">
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid item xs={12} md={4}>
            <Stack gap={2}>
              <Typography fontWeight="bold" variant="h4">
                شاهین خودرو
              </Typography>
              <Typography fontWeight="medium" variant="subtitle1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </Typography>
              <Stack direction="row" gap={2}>
                <ContactLink
                  text="09569864466"
                  link="tel:09569864466"
                  Icon={FiPhoneCall}
                />
                <ContactLink
                  text="info@gmail.com"
                  link="mailto:info@gmail.com"
                  Icon={FiMail}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack gap={2}>
              <Typography fontWeight="medium" variant="h6">
                دسترسی سریع
              </Typography>
              <Grid container component="nav" spacing={3}>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <AccessLink title="قیمت روز" link="/" />
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <AccessLink title="قیمت روز" link="/" />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack gap={2}>
              <Typography fontWeight="medium" variant="h6">
                عضویت در خبرنامه
              </Typography>
              <EmailInput />
              <Stack gap={2} direction="row" flexWrap="wrap">
                <AccessLicense
                  link="/"
                  src="/assets/images/enamad.png"
                  alt="اینماد"
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ background: "white", opacity: "50%" }} />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>
                کلیه حقوق مادی و معنوی سایت نزد شاهین خودرو محفوظ است | طراحی
                توسط دانیال حیدری
              </Typography>
              <Stack direction="row" gap={1}>
                <SocialLink Icon={AiOutlineInstagram} link="http://www.instagram.com/" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
