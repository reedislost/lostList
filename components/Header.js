import { Text, Center, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center display="flex" flexDirection="column">
      <Text fontSize="7xl">isLost</Text>
      <Text>a directory of cool sites</Text>
      <Text textAlign="center">r@islost.xyz</Text>
      <Box mt="5"></Box>
    </Center>
  );
}
