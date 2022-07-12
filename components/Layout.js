import React from "react";
import { Center, Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Center display="flex" flexDirection="column">
      <Box>
        <Header />
      </Box>
      <Box> {children}</Box>
      <Box>
        <Footer />
      </Box>
    </Center>
  );
}
