import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
type prop = {
  logo: string;
  first: string;
  second: string;
};
function WTCCompo({ logo, first, second }: prop) {
  return (
    <Box
      borderRadius={"lg"}
      border={"1px"}
      borderColor={"gray.400"}
      minW={"196px"}
      minH={"73px"}
    >
      <Flex>
        <Image src={logo} w={"30%"} />
        <Flex direction={"column"} align={"flex-start"}>
          <Text fontSize={"sm"}>{first}</Text>
          <Text fontSize={"sm"}>{second}</Text>
          <Text fontSize={"sm"}>KNOW MORE</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default WTCCompo;
