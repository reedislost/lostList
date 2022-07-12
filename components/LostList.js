import {
  Box,
  Center,
  Container,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  OrderedList,
  Square,
  Text,
} from "@chakra-ui/react";

import LostItem from "./LostItem";

export default function LostList() {
  return (
    <Box display="flex" textAlign="center" mt="9" mb="9">
      <Square>
        <UnorderedList listStyleType="none">
          <LostItem url="https://reedislost.com" name="reedislost" />
          <LostItem url="https://nextoasis.vercel.app/" name="nextOasis" />
          <LostItem
            url="https://anotheroasis.vercel.app/"
            name="anotherOasis"
          />
          <LostItem url="https://islost.vercel.app/" name="islost.xyz" />
        </UnorderedList>
      </Square>
    </Box>
  );
}
