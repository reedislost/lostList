import { Box, Square, Head, Center } from "@chakra-ui/react";
import LostList from "../components/LostList";

export default function Home() {
  return (
    <Center>
      {/* <Head>
          <title>lostList</title>
          <meta
            name="description"
            content="cool projects built by random people on the internet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
      <Box>
        <LostList />
      </Box>
    </Center>
  );
}
