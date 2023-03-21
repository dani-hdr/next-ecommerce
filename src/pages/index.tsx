import Intro from "@/components/home/Intro";
import { Container, Stack } from "@mui/material";
import Info from "../components/home/Info";
import Prices from "@/components/home/Prices";
import BestSellers from "@/components/home/BestSellers";
import Comments from "@/components/home/Comments";
import Blog from "@/components/home/Blog";
import Questions from "@/components/home/Questions";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack gap={{ xs: 8, md: 20 }}>
          <Intro />
          <Info />
          <Prices />
          <BestSellers/>
          <Comments/>
          <Blog/>
          <Questions/>
        </Stack>
      </Container>
    </>
  );
}
