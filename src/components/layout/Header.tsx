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
  Divider,
  Button,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import theme from "./../../theme/index";

import { HiMenuAlt3 } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import logo from '/logo.svg'
import Image from "next/image";
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
  { title: "خرید خودرو", link: "/about-us" },
  { title: "قیمت روز", link: "/contact-us" },
  { title: "بلاگ", link: "/contact-us" },
  { title: " درباره ما", link: "/contact-us" },
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
          right: isOpen ? 0 : -500,
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
        flexGrow:1,
        marginRight:{sm:5}
        
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
      sx={{ flex: 1, width: "100%",'& input':{py:'11px'} }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <RiSearch2Line style={{ marginInline: "10px" }} />
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

  const handleToggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", mt: 3,mb:6 }}
      component="header"
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          flexWrap='wrap'
          justifyContent="space-between"
          
          alignItems="center"
        >
          <IconButton
            onClick={handleToggleMenu}
            sx={{ display: { sm: "none" },position:{xs:'sticky',md:'flex'},top:5 }}
          >
            <HiMenuAlt3 />
          </IconButton>
          <Typography variant="h4" color="text.primary" fontWeight='bold' sx={{textDecoration:'none'}} component={Link} href='/'>AutoTrader</Typography>

          {isSm ? (
            <DesktopMenu MenuItems={MenuItems} />
          ) : (
            <MobileMenu
              MenuItems={MenuItems}
              isOpen={Boolean(isOpen)}
              toggle={handleToggleMenu}
            />
          )}
          <Stack
           
            flexGrow={1}
            direction="row"
            gap={2}
            alignItems="center"
          >
            
            <SearchInput />
            <Button
             LinkComponent='a'
             href="tel:09361480815"
              size="large"
              startIcon={
                <FiPhoneCall style={{ marginLeft: "10px", fontSize: "16px" }} />
              }
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
