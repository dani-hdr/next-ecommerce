import { Box, Breadcrumbs, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import Link from "next/link";
import ProductDetailGallery from "@/components/product-detail/ProductDetailGallery";
import ProductDetailInfo from "@/components/product-detail/ProductDetailInfo";
import ProductDetailComments from "@/components/product-detail/ProductDetailComments";
import TabPanel from '@/components/product-detail/TabPanel';
import carsData, { car } from '@/__mock__/products'
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const ProductDetail = ({carData}:{carData:car}) => {
  const [value, setValue] = useState(0);



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Container maxWidth="lg">
      <Breadcrumbs
      sx={{mb:5}}
        separator={<MdOutlineKeyboardArrowLeft fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link href="/">خانه</Link>
        <Link href="/">آرشیو محصولات</Link>
        <Typography>خودرو سوزوکی</Typography>
      </Breadcrumbs>
      <Stack direction={{xs:'column',md:'row'}} alignItems='center'  gap={2}>
      <ProductDetailGallery images={carData.gallery}/>
      <ProductDetailInfo title={carData.name} price={carData.price} brand={carData.brand} city={carData.city} year={carData.year} cylinder={carData.cylinder} gearbox={carData.gearbox}  />
      </Stack>
      <Box sx={{ width: '100%',mt:5 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{'& button':{fontSize:'1.3rem'}}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="توضیحات محصول" {...a11yProps(0)} />
          <Tab label="مشخصات کامل" {...a11yProps(1)} />
          <Tab label="نظرات کاربران" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {carData.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductDetailComments/>
      </TabPanel>
    </Box>
    </Container>
  );
};

export const getServerSideProps : GetServerSideProps<{ carData: car | undefined }> = async (context) =>
{

  const carData = carsData.find(x=>x.id === Number(context.query.id))
  return {
    props: {carData}, // will be passed to the page component as props
  }
}

export default ProductDetail;
