import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  Drawer,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const Selected = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon="+"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="filter-title">موارد انتخاب شده</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          <Chip label="نقره ای" onDelete={() => console.log("deleted")} />
          <Chip label="تویوتا" onDelete={() => console.log("deleted")} />
          <Chip label="تویوتا" onDelete={() => console.log("deleted")} />
          <Chip label="تویوتا" onDelete={() => console.log("deleted")} />
          <Chip label="تویوتا" onDelete={() => console.log("deleted")} />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

const Colors = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon="+"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="filter-title"> رنگ ها</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack maxHeight="200px" sx={{ overflowY: "auto" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            آبی <Checkbox value="blue" checked={false} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            قرمز <Checkbox value="red" checked={false} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            سفید <Checkbox value="white" checked={false} />
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

const Brands = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon="+"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="filter-title"> برند مورد نظر</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack maxHeight="200px" sx={{ overflowY: "auto" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            بی ام دبلیو <Checkbox value="blue" checked={false} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            بی ام دبلیو <Checkbox value="blue" checked={false} />
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

const PriceRange = () => {


  const PriceBox = ({price}:{price:number}) => {
    return (
      <Stack alignItems="center">
        <span>از</span>
        <Box
          component="span"
          sx={{
            display: "flex",
            width: "100px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            py: 1,
            px: 2,
            background: (theme) => theme.palette.secondary.light,
            color: "secondary.main",
            fontWeight: "medium",
          }}
        >
          {price}
        </Box>
        <span>تومان</span>
      </Stack>
    );
  };

  const [value, setValue] = useState<number[]>([0, 1000000000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(value);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon="+"
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="filter-title">محدوده قیمت مورد نظر</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={2}>
          <Slider
            defaultValue={0}
            step={10000}
            min={0}
            max={1000000000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
          />
          <Stack
            color="text.secondary"
            direction="row"
            justifyContent="space-between"
          >
            <PriceBox price={value[0]}/>
            <Divider orientation="vertical" flexItem />
            <PriceBox price={value[1]}/>
          </Stack>
          <Button variant="outlined" size="large" color="primary" fullWidth>
            اعمال محدود قیمت
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
const ChassisType = ()=>{
 return (
  <Accordion>
  <AccordionSummary
    expandIcon="+"
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography className="filter-title"> نوع شاسی</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Stack maxHeight="200px" sx={{ overflowY: "auto" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        سدان <Checkbox value="blue" checked={false} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
         شاسی بلند  <Checkbox value="blue" checked={false} />
      </Stack>
    </Stack>
  </AccordionDetails>
</Accordion>
 )
}
const FilterBox = () => {
  const [isOpen,setOpen] = useState<boolean>(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  if(isDesktop){
    return (
      <Box
    sx={{
      flexBasis:"30%",
      "& .MuiAccordion-root": {
        boxShadow: "none",
        background: "transparent",
      },
      "& .filter-title": { fontWeight: "medium" },
    }}
  >
    <Selected />
    <Colors />
    <Brands />
    <PriceRange />
    <ChassisType/>
  </Box>
    )
  }else{
    return (
      <Drawer
      sx={{'& .MuiDrawer-paper':{borderRadius:'0px'}}}
      anchor={'left'}
      open={isOpen}
      onClose={()=>setOpen(false)}
    >
       <Box
        sx={{
          width:'250px',
          borderRadius:'none',
         
          "& .MuiAccordion-root": {
            
            boxShadow: "none",
            background: "transparent",
          },
          "& .filter-title": { fontWeight: "medium" },
        }}
      >
        <Selected />
        <Colors />
        <Brands />
        <PriceRange />
        <ChassisType/>
      </Box>
    </Drawer>
     
    );
  }

};

export default FilterBox;
