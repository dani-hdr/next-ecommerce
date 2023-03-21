import React, { useState } from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Button,
  Box,
  Card,
  Stack,
  Tabs,
  Tab,
  Pagination,
  Typography,
  useTheme,
  Paper,
} from "@mui/material";


import { SiKia } from "react-icons/si";
import { CgBmw } from "react-icons/cg";
import { SiFord } from "react-icons/si";
import { SiBentley } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { TbBrandToyota } from "react-icons/tb";
import { SiTesla } from "react-icons/si";

import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";

function createData(
  name: string,
  year: number,
  marketPrice: number,
  factoryPrice: number
) {
  return { name, year, marketPrice, factoryPrice };
}
const rows = [
  createData("پژو 206 (تیپ 5)", 1399, 210000000, 210000000),
  createData("پژو 405", 1399, 210000000, 11000000),
  createData("پژو پارس", 1399, 110000000, 109000000),
  createData("پژو پارس", 1399, 110000000, 109000000),
];

const StyledHeadCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <TableCell
      sx={{ color: (theme) => theme.palette.text.secondary }}
      align="right"
    >
      {children}
    </TableCell>
  );
};

const PriceTable = () => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const StyledTabs = () => {
    return (
      <Box
        bgcolor="secondary.main"
        sx={{ borderRadius: "15px", width: "100%" }}
      >
        <Tabs
          sx={{
            "& .MuiTabs-indicator": { display: "none" },
            "& .Mui-selected,& .MuiTabScrollButton-root,.MuiTab-root.Mui-selected ":
              { color: "white" },
            "& .MuiTabs-scrollButtons.Mui-disabled": { opacity: 0.3 },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<SiKia fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<CgBmw fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<SiFord fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<SiBentley fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<SiChevrolet fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<TbBrandToyota fontSize="50px" />} aria-label="Item One" />
          <Tab icon={<SiTesla fontSize="50px" />} aria-label="Item One" />
        </Tabs>
      </Box>
    );
  };

  const StyledBodyCell = ({children,error,success}:{children:React.ReactNode,error?:number,success?:number}) => {
    const theme = useTheme()
    return (
      <TableCell align="right">
        
        <Box sx={{display:'flex',alignItems:'center',gap:'3px'}} mr={1}>
        {children}
          {error && <Typography color="error.main">(%{error}) </Typography>}
          {success && <Typography color="success.main">(%{success}) </Typography>}
          {error && <BsArrowDown style={{marginBottom:'5px'}} color={theme.palette.error.main} />}
          {success && <BsArrowUp style={{marginBottom:'5px'}} color={theme.palette.success.main}/>}
        </Box>
      </TableCell>
    );
  };
  return (
    <Paper elevation={2}>
        <Stack alignItems="center" gap={2}>
          <StyledTabs />
          <TableContainer component={Box}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledHeadCell>نام خودرو</StyledHeadCell>
                  <StyledHeadCell>سال</StyledHeadCell>
                  <StyledHeadCell>قیمت بازار</StyledHeadCell>
                  <StyledHeadCell>قیمت کارخانه</StyledHeadCell>
                  <StyledHeadCell>موجودی</StyledHeadCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{ "& .MuiTableCell-root": { borderBottom: "none" } }}
              >
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "&:nth-child(even)": {
                        backgroundColor: (theme) =>
                          theme.palette.secondary.light,
                      },
                    }}
                  >
                    <StyledBodyCell >
                      {row.name}
                    </StyledBodyCell>
                    <StyledBodyCell >{row.year}</StyledBodyCell>
                    <StyledBodyCell error={5}>
                      {row.marketPrice}
                
                    </StyledBodyCell>
                    <StyledBodyCell success={3}>
                      {row.factoryPrice}
                    </StyledBodyCell>
                    <StyledBodyCell >
                      <Button color="secondary" LinkComponent={Link} href="/">
                        مشاهده
                      </Button>
                    </StyledBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            sx={{
              alignSelf: "flex-end",
              "& .MuiPaginationItem-root.Mui-selected": {
                color: (theme) => theme.palette.primary.main,
              },
            }}
            count={10}
            shape="rounded"
          />
        </Stack>
    </Paper>
  );
};

export default PriceTable;
