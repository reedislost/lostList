import React from "react";
import {
  Center,
  List,
  ListItem,
  UnorderedList,
  ListIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function LostItem(props) {
  return (
    <ListItem fontSize="5xl">
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
    </ListItem>
  );
}
