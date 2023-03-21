import {
  Box,
  Grid,
  Paper,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { FaRegHandshake } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IconType } from "react-icons/lib";

const data : {title:string,description:string,icon:IconType}[] = [
  {
  title:"حذف رابطه ها",
  description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  icon:FaRegHandshake
},
{
  title:"بهترین قیمت ها",
  description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  icon:GiMoneyStack
},
{
  title:"سهولت در معمامله",
  description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  icon:AiOutlineTransaction
},
{
  title:"انتخاب سریع و آسان",
  description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  icon:AiOutlineFieldTime
}
]
const InfoBox = ({
  Icon,
  title,
  description,
}: {
  Icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const theme = useTheme<Theme>();
  return (
    <Paper
      elevation={2}
      sx={{
        userSelect: "none",
        transition: "all ease .3s",
        py: 5,
        "&:hover": {
           backgroundColor: (theme) => theme.palette.secondary.light,
          boxShadow: (theme) => theme.shadows[5],
         
        },
      }}
    >
      <Stack alignItems="center" gap={2}>
        {
          <Icon
            style={{ fontSize: "100px", color: theme.palette.secondary.main }}
          />
        }
        <Typography variant="h5" component="h4" fontWeight="medium">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          className="line-clamp-2"
        >
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};
const Info = () => {
  return (
    <Box component="section">
      <Grid
        container
        spacing={2}
        sx={{ "& > :nth-child(2n+1)": { transform:{md:"translateY(-50px)"} } }}
      >
       {data.map((info,index)=>(  <Grid key={index} item xs={12} sm={6} md={3}>
          <InfoBox
            title={info.title}
            description={info.description}
            Icon={info.icon}
          />
        </Grid>) )}
      </Grid>
    </Box>
  );
};

export default Info;
