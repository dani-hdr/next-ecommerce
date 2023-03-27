import { Box, Stack, Breadcrumbs, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {RxSlash} from 'react-icons/rx'
const BreadCrumbTitle = ({title,links}:{title:string,links:{title:string,url:string}[]}) => {
    return (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/1",
            overflow: "hidden",
            borderRadius: "15px",
            mb: 5,
          }}
        >
          <div className="img-overlay" style={{ opacity: 1 }} />
          <Box>
            <Image
              src="/assets/images/sell-car.jpg"
              fill
              alt="products"
              style={{ objectFit: "cover", objectPosition: "top", zIndex: 0 }}
            />
          </Box>
          <Stack
            sx={{
              alignItems: "center",
              zIndex: 20,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: " translate(-50%, -50%)",
            }}
          >
            <Breadcrumbs sx={{fontSize:{xs:8,sm:12,md:18,lg:20}}} separator={<RxSlash  color='white'/>} aria-label="breadcrumb">
             {links.map((link,i)=>  <Link key={i} href={link.url}>
                
                <Typography variant="subtitle1"  fontWeight="regular" color="white">
                  {link.title}
                </Typography>
              </Link>)}
             
            </Breadcrumbs>
            <Typography
              component="h1"
              variant="h2"
              fontSize={{xs:36,md:48,lg:64}}
              fontWeight="bold"
              color="white"
            >
              {title}
            </Typography>
          </Stack>
        </Box>
      );
}

export default BreadCrumbTitle