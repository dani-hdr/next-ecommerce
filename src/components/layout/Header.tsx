import {
  AppBar,
  Link as MLink,
  Box,
  Container,
  Stack,
  Backdrop,
  Typography,
  IconButton,
  useMediaQuery,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import theme from "./../../theme/index";

import { HiMenuAlt3 } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
  MenuItems: { title: string; link: string }[];
}

interface DesktopMenuProps {
  MenuItems: { title: string; link: string }[];
}

const MenuItems = [
  { title: "خانه", link: "/" },
  { title: "خرید خودرو", link: "/products" },
  { title: "بلاگ", link: "/blog" },
  { title: " درباره ما", link: "/about-us" },
];

const MobileMenu = ({ isOpen, toggle, MenuItems }: MobileMenuProps) => {
  return (
    <Backdrop sx={{ zIndex: 50 }} onClick={toggle} open={isOpen}>
      <Box
        bgcolor="white"
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 100,
          width: 250,
          height: "100vh",
          boxShadow: (theme) => theme.shadows[1],
          gap: 3,
          position: "fixed",
          p: 3,
          top: 0,
          left: isOpen ? 0 : -500,
          transition: "ease all .2s",
        }}
      >
        {MenuItems.map((item, i) => (
          <MLink
            key={i}
            color="text.primary"
            underline="none"
            component={Link}
            href={item.link}
          >
            {item.title}
          </MLink>
        ))}
      </Box>
    </Backdrop>
  );
};
const DesktopMenu = ({ MenuItems }: DesktopMenuProps) => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        gap: 4,
        flexGrow: 1,
      }}
    >
      {MenuItems.map((item, i) => (
        <MLink
          sx={{ "&:hover": { color: "text.primary" } }}
          key={i}
          color="text.secondary"
          variant="subtitle1"
          underline="none"
          component={Link}
          href={item.link}
        >
          {item.title}
        </MLink>
      ))}
    </Box>
  );
};

const SearchInput = () => {
  return (
    <TextField
      sx={{ flex: 1, width: "100%", "& input": { py: "11px" } }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <RiSearch2Line />
          </InputAdornment>
        ),
      }}
      placeholder="نام خودرو یا برند موردنظر را وارد کنید"
    />
  );
};
const Header = () => {
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const handleToggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      position={isSticky ? "sticky" : "static"}
      sx={{width:'100%', boxShadow : isSticky ? "" : "none", mb: 6, borderRadius: "0px",bgcolor: isSticky ? "white" :"transparent", py: 2,transition:'all 0.3s ease-in-out',top:isSticky ? 0 : '-100px' }}
      component="header"
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          spacing={2}
          alignItems="center"
        >
          <IconButton
            onClick={handleToggleMenu}
            sx={{
              display: { sm: "none" },
              position: { xs: "sticky", md: "flex" },
              top: 5,
            }}
          >
            <HiMenuAlt3 />
          </IconButton>
          <Typography
            variant="h4"
            color="text.primary"
            fontWeight="fat"
            sx={{ textDecoration: "none", mr: { sm: 4 } }}
            component={Link}
            href="/"
          >
            لوگو
          </Typography>

          {isSm ? (
            <DesktopMenu MenuItems={MenuItems} />
          ) : (
            <MobileMenu
              MenuItems={MenuItems}
              isOpen={Boolean(isOpen)}
              toggle={handleToggleMenu}
            />
          )}
          <Stack flexGrow={1} direction="row" gap={2} alignItems="center">
            <SearchInput />
            <Button
              LinkComponent="a"
              href="tel:09361480815"
              size="large"
              startIcon={<FiPhoneCall style={{ fontSize: "16px" }} />}
              variant="contained"
            >
              تماس با ما
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
