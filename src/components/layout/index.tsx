import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from './Footer'

interface Props {
    children : React.ReactNode
}
const Layout = ({children} : Props) => {
  return (
   <Stack minHeight='100vh' >
   <Header/>
   <Box component='main' mb={10}>
    {children}
   </Box>
   <Footer />
   </Stack>
  )
}

export default Layout