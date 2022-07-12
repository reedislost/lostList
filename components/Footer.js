import { Center, Box, Button } from "@chakra-ui/react";
import { FaYinYang, MoonIcon, SunIcon } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function Footer() {
  return (
    <Center>
      <Box>
        <Link href="https://discord.gg/nMAUeZDt" target="_blank">
          <a>
            <FaDiscord size="25px" />
          </a>
        </Link>
      </Box>

      <Box>
        <ColorModeSwitcher />
      </Box>
    </Center>
  );
}
