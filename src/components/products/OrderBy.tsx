import { SelectChangeEvent, Paper, Stack, Typography, FormControl, Select, MenuItem, IconButton } from '@mui/material';
import React from 'react'
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { MdTableRows } from 'react-icons/md';

const OrderBy = ({getLayout}:{getLayout:(layout:string)=>void}) => {
    const [age, setAge] = React.useState("age");


    
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
      <Paper elevation={0} sx={{ bgcolor: "secondary.light",py:1,px:3 }}>
        <Stack direction="row" flexWrap='wrap' alignItems='center' justifyContent="space-between">
          <Stack direction="row" alignItems="center" gap={2} >
            <Typography fontWeight='medium'>مرتب سازی بر اساس :</Typography>
            <FormControl size="small" sx={{ m: 1, minWidth: 120,'& .MuiInputBase-input':{border:'none',boxShadow:'none',outline:'none'} }}>
        <Select
        sx={{background:'white','& .MuiInputBase-input':{border:'none',boxShadow:'none',outline:'none'}}}
          value="price"
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          
          <MenuItem value="price">براساس قیمت</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl>
          </Stack>
          <Stack sx={{display:{xs:'none',sm:'flex'}}} direction='row' alignItems='center' gap={2}>
          <Typography fontWeight='medium'>چیدمان:</Typography>
          <IconButton onClick={()=>getLayout("grid")}  sx={{bgcolor:'white',borderRadius:'10px','&:hover':{bgcolor:'primary.main',color:'white'}}}><TfiLayoutGrid3Alt/></IconButton>
          <IconButton  onClick={()=>getLayout("row")}  sx={{bgcolor:'white',borderRadius:'10px','&:hover':{bgcolor:'primary.main',color:'white'}}}><MdTableRows/></IconButton>
          </Stack>
        </Stack>
      </Paper>
    );
  };

export default OrderBy