import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,

  fonts: {
    body: `'Roboto', monospace`,
  },
});

export default theme;
