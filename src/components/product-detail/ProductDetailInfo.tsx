import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import { BsShare } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { toPersianCurrency } from "@/utils/toPersianCurrency";

const ProductDetailInfo = ({title,price,year,brand,city,gearbox,cylinder}:{title:string,price:number,year:number,brand:string,city:string,gearbox:number,cylinder:number}) => {
  return (
    <Box flex={3} flexGrow={1}>
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Typography variant="h4" component="h1" fontWeight="bold">
          {title}
        </Typography>
        <Stack direction="row" gap={1}>
          <Checkbox
            sx={{
              width: 35,
              height: 35,
              border: "2px solid ",
              borderColor: "secondary.main",
              "& svg": { color: "secondary.main", fontSize: 26 },
            }}
            icon={<AiOutlineHeart />}
            checkedIcon={<AiFillHeart />}
          />
          <IconButton
            sx={{
              width: 35,
              height: 35,
              border: "2px solid ",
              borderColor: "secondary.main",
              "& svg": { color: "secondary.main", fontSize: 26 },
            }}
          >
            <IoIosGitCompare />
          </IconButton>
          <IconButton
            sx={{
              width: 35,
              height: 35,
              border: "2px solid ",
              borderColor: "secondary.main",
              "& svg": { color: "secondary.main", fontSize: 26 },
            }}
          >
            <BsShare />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{my:3}} />
      <Table sx={{ border: 'none' }}>
      <TableBody sx={{'& > tr:nth-child(odd)':{backgroundColor: 'rgba(0, 0, 0, 0.04)'},'& td':{border:'none'}}}>
        <TableRow >
          <TableCell><Typography color='text.secondary'>سال ساخت</Typography></TableCell>
          <TableCell><Typography color='text.primary'>{year}</Typography></TableCell>
        </TableRow>
        <TableRow >
          <TableCell><Typography color='text.secondary'>شرکت</Typography></TableCell>
          <TableCell><Typography color='text.primary'>{brand}</Typography></TableCell>
        </TableRow>
        <TableRow >
          <TableCell><Typography color='text.secondary'>شهر</Typography></TableCell>
          <TableCell><Typography color='text.primary'>{city}</Typography></TableCell>
        </TableRow>
        <TableRow >
          <TableCell><Typography color='text.secondary'>گیربکس</Typography></TableCell>
          <TableCell><Typography color='text.primary'>{gearbox}</Typography></TableCell>
        </TableRow>
        <TableRow >
          <TableCell><Typography color='text.secondary'>تعداد سیلندر</Typography></TableCell>
          <TableCell><Typography color='text.primary'>{cylinder}</Typography></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Stack mt={3} gap={2} direction={{xs:'column',sm:'row'}} justifyContent="space-between" alignItems='center'>
      <Typography color='secondary' variant="h5" fontWeight='medium'>{toPersianCurrency(price)}</Typography>
    <Button
            LinkComponent="a"
            href="tel:09361480815"
            size="large"
            sx={{ boxShadow: (theme) => theme.shadows[2] }}
            startIcon={
              <FiPhoneCall style={{ fontSize: "16px" }} />
            }
            variant="contained"
            color="secondary"
          >
            تماس با فروشنده
          </Button>
    </Stack>
    </Box>
  );
};

export default ProductDetailInfo;
