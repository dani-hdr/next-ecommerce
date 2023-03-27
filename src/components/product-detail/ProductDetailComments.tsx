import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { BiUser, BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";

import Image from "next/image";
import { comment } from "stylis";

const Form = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        "& .MuiFormControl-root": {
          borderRadius: "15px",
          background: "white",
          boxShadow: (theme) => theme.shadows[2],
        },
      }}
    >
      <Grid item xs={6}>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BiUser />
              </InputAdornment>
            ),
          }}
          placeholder="نام و نام خانوادگی"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          sx={{ flex: 1 }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AiOutlineMail />
              </InputAdornment>
            ),
          }}
          placeholder="ایمیل"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ flex: 2 }}
          fullWidth
          multiline
          minRows={4}
          maxRows={8}
          placeholder="دیدگاه شما"
        />
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="text.secondary">
            پرکردن آدرس ایمیل و ستاره های امتیازدهی الزامی نمی باشد
          </Typography>
          <Button size="large" variant="contained">
            ارسال نظر
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

interface comment {
  avatar: string;
  name: string;
  date: string;
  text: string;
}
const CommentBox = ({ comment,reply }: {comment:comment,reply?:boolean}) => {
  const width = reply ? '80%' : '100%';
  return (
    <Paper sx={{ p: 2, width: width }}>
      <Stack direction="row" alignItems="center" gap={2}>
        <Image
          src={comment.avatar}
          width={50}
          height={50}
          alt="avatar"
          style={{ objectFit: "cover", borderRadius: "15px" }}
        />
        <Typography variant="subtitle1" fontWeight="medium">
          {comment.name}
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          variant="subtitle1"
          color="text.secondary"
        >
          <BiTimeFive />
          {comment.date}
        </Typography>
        <IconButton
          sx={{
            "&:hover": { bgcolor: "secondary.dark" },
            bgcolor: "secondary.main",
            color: "white",
            borderRadius: "10px",
            ml: "auto",
          }}
        >
          <BsArrowReturnLeft />
        </IconButton>
      </Stack>
      <Divider flexItem sx={{ my: 2 }} />
      <Typography color="text.secondary">{comment.text}</Typography>
    </Paper>
  );
};

const Comment = ({
  comment,
  replies,
}: {
  comment: comment;
  replies: comment[];
}) => {
  return (
    <>
      <CommentBox
      comment={comment}
      />
      
      <Stack gap={2} alignItems="end">
        {replies.length > 0 &&
          replies.map((reply, i) => (
            <CommentBox
            key={i}
            reply
            comment={reply}
            />
          ))}
          
      </Stack>
    </>
  );
};
const ProductDetailComments = () => {
  const comment1 = {
    name: "دانیال حیدری",
    avatar: "/images/avatars/1.jpg",
    date: "دو روز قبل",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    replies: [
      {
        name: "دانیال حیدری",
        avatar: "/images/avatars/1.jpg",
        date: "دو روز قبل",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      },
      {
        name: "دانیال حیدری",
        avatar: "/images/avatars/1.jpg",
        date: "دو روز قبل",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      },
    ],
  };
  return (
    <Box>
      <Box>
        <Stack direction="row" justifyContent="space-between" mb={3}>
          <Typography variant="h6" fontWeight="medium">
            امتیاز دهی :
          </Typography>
          <Rating name="simple-controlled" value={5} onChange={() => null} />
        </Stack>
        <Form />
        <Stack gap={2} mt={10}>
          <Comment comment={comment1} replies={comment1.replies} />
          <Comment comment={comment1} replies={comment1.replies} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductDetailComments;
