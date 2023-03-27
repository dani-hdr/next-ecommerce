import cars, { car } from "@/__mock__/products";
import { toPersianCurrency } from "@/utils/toPersianCurrency";
import { Box, Button, Divider, Grid, Pagination, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductBox = ({display,car}:{display:"vertical" | "horizontal",car:car}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  if(display === "horizontal" && isDesktop ){
    return (
       <Paper sx={{ p: 2 }}>
       <Stack   direction='row' alignItems="center" justifyContent='space-between' gap={3}>
         <Paper  elevation={1} sx={{ p: 1 }}>
           <Image
             style={{ objectFit: "contain" }}
             src={car.thumbnail}
             width={150}
             height={150}
             alt={car.name}
           />
         </Paper>
         <Stack  flex={1} gap={1}>
           <Stack direction="row" justifyContent="space-between">
             <Typography component="h2" variant="h6" fontWeight="bold">
              {car.name}
             </Typography>
             <Box component='span'  sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px',px:1,background:theme=>theme.palette.secondary.light,color:'secondary.main',fontWeight:'bold'}}>{car.year}</Box>
           </Stack>
           <Stack  direction='row' gap={3} alignItems='end'>
             <Stack  flex={1} justifyContent="start" gap={1}>
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                   قیمت
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="bold"
                   color="text.primary"
                   fontSize='large'
                 >
                   {toPersianCurrency(car.price)}
                 </Typography>
               </Stack>
               <Divider />
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                   قیمت کارخانه
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                 >
                   {toPersianCurrency(car.price)}
                 </Typography>
               </Stack>
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                   قیمت بازار
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                 >
                    {toPersianCurrency(car.price)}
                 </Typography>
               </Stack>
             </Stack>
             <Stack  flex={1} justifyContent="start" gap={1}>
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                   شرکت
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                   textAlign='start'
                 >
                  {car.brand}
                 </Typography>
               </Stack>
 
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                  کارکرد
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                   
                 >
                   {getRandomNumber(100,10000)}
                 </Typography>
               </Stack>
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                   شهر
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                 >
                  {car.city}
                 </Typography>
               </Stack>
               <Stack direction="row" justifyContent="space-between">
                 <Typography variant="subtitle1" color="text.secondary">
                  گیربکس
                 </Typography>
                 <Typography
                   variant="subtitle1"
                   fontWeight="medium"
                   color="text.primary"
                 >
                   {car.gearbox}
                 </Typography>
               </Stack>
             </Stack>
             <Button LinkComponent={Link} href={`/products/${car.id}`} variant="contained"  color="secondary" size="large">جزییات خودرو</Button>
           </Stack>
         </Stack>
       </Stack>
     </Paper>
    );
  }else {
    return (
    
      <Paper sx={{ p: 2 }}>
        <Stack   direction='column' alignItems="center" gap={3}>
          <Paper  elevation={1} sx={{ p: 1 }}>
            <Image
              style={{ objectFit: "contain" }}
              src={car.thumbnail}
              width={150}
              height={150}
              alt={car.name}
            />
          </Paper>
          <Stack width='100%' flex={1} gap={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography component="h2" variant="h6" fontWeight="bold">
                {car.name}
              </Typography>
              <Box component='span'  sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px',px:1,background:theme=>theme.palette.secondary.light,color:'secondary.main',fontWeight:'bold'}}>{car.year}</Box>
            </Stack>
            <Stack  direction='column' gap={1} alignItems='end'>
              <Stack width='100%' flex={1} justifyContent="start" gap={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    قیمت
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                    fontSize='large'
                  >
                    {toPersianCurrency(car.price)}
                  </Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    قیمت کارخانه
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    {toPersianCurrency(car.price)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    قیمت بازار
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    {toPersianCurrency(car.price)}
                  </Typography>
                </Stack>
              </Stack>
              <Stack width='100%' flex={1} justifyContent="start" gap={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    شرکت
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                    textAlign='start'
                  >
                   {car.brand}
                  </Typography>
                </Stack>
  
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                   کارکرد
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                    
                  >
                    {getRandomNumber(100,10000)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                    شهر
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                  >
                   {car.city}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" color="text.secondary">
                   گیربکس
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    {car.gearbox}
                  </Typography>
                </Stack>
              </Stack>
              <Button sx={{width:'100%'}} LinkComponent={Link} href={`/products/${car.id}`} variant="contained"  color="secondary" size="large">جزییات خودرو</Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    );
  }
};
const ProductList = ({layout,carsData}:{layout:string,carsData:car[]}) => {
  // if(layout=="row"){
    return (
      <Stack alignItems='center' gap={2}>
     <Grid container spacing={2}>
        {carsData.map(car=> <Grid key={car.id} item xs={12} sm={layout=="row" ? 12 : 6}>
          <ProductBox car={car} display={layout=="row" ? "horizontal" : "vertical"} />
        </Grid>     )}
      </Grid>
      <Pagination color="primary" count={10} shape="rounded" />
      </Stack>
  
    );
  // }else{
  //   return (
  //     <Stack alignItems='center' gap={2}>
  //    <Grid container spacing={2}>
  //       <Grid item xs={12} sm={6}>
  //         <ProductBox display="vertical" />
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <ProductBox display="vertical" />
  //       </Grid>
  //       <Grid item  xs={12} sm={6}>
  //         <ProductBox display="vertical" />
  //       </Grid>
        
  //     </Grid>
  //     <Pagination color="primary" count={10} shape="rounded" />
  //     </Stack>
  
       
  
  //   );
  // }
 
};


function getRandomNumber(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default ProductList;
