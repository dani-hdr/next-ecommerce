import BreadCrumbTitle from "@/components/custom/BreadCrumbTitle";
import FilterBox from "@/components/products/FilterBox";
import OrderBy from "@/components/products/OrderBy";
import ProductList from "@/components/products/ProductList";
import { Box, Stack, Container } from "@mui/material";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import carsData, { car } from "@/__mock__/products";


const Products  = ({data}:{data :car[] }) => {
  
  const [layout,setLayout] = useState<string>("row");
  const hadleGetLayout = (layout:string)=>{
    setLayout(layout)
  }

  return (
    <Container maxWidth="lg">
      <BreadCrumbTitle title="آرشیو محصولات" links={[{title:"خانه",url:"/"},{title:"آرشیو محصولات",url:"/products"}]} />
      <Stack direction="row" gap={2}  >
          <FilterBox />
        <Stack  gap={4} flexGrow={1}>
          <OrderBy getLayout={hadleGetLayout} />
          <ProductList carsData={data} layout={layout} />

        </Stack>
      </Stack>
    </Container>
  );
};

export const getServerSideProps : GetServerSideProps<{ data: car[] }> = async () =>
{
  const data = carsData
  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default Products;
