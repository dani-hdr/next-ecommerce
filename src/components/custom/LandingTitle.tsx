import { Typography } from '@mui/material'
import React from 'react'

const LandingTitle = ({title,position}:{title:string,position?:"center"|"right"}) => {
  const margin = position=="right" ? '.2rem 0 auto 0' : '.2rem auto 0'
  return (
    <Typography sx={{position:'relative','&::after':{display:'block',content:'""',width:'6rem',borderBottom:'0.3rem solid',borderColor:(theme)=>theme.palette.primary.main,margin:margin}}}  textAlign='center' variant='h4' fontWeight='medium' component='h3'>{title} </Typography>
  )
 
}

export default LandingTitle