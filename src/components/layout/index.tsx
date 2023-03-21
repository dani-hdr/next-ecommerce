import { Container } from '@mui/material'
import React from 'react'
import Header from '@/components/layout/Header'
import Footer from './Footer'

interface Props {
    children : React.ReactNode
}
const Layout = ({children} : Props) => {
  return (
   <>
   <Header/>
   <main>
    <Container maxWidth='lg'>
    {children}
    </Container>
   </main>
   <Footer/>
   </>
  )
}

export default Layout