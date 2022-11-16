import { Box, Flex, Image, Text } from "@chakra-ui/react";
const and = require("./and.png");
const apple = require("./apple.png");
export const NavBar1 = () => {
  return (
    <Box bg={"white"} color={"black"}  >
      <Flex
        justifyContent={"space-around"}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Flex>
          <p>Download&nbsp;Our&nbsp;App:</p>
          <Image h={"25px"} src={and} />
          <Image h={"25px"} src={apple} />
        </Flex>
        <Flex gap={"10px"}>
          <Text>Why&nbsp;tenderCuts</Text>
          <span>|</span>
          <Text>Blog</Text>
          <span>|</span>
          <Text>Franchise</Text>
          <span>|</span>
          <Text>Certificate</Text>
          <span>|</span>
          <Text>Store&nbsp;Locator</Text>
          <span>|</span>
          <Text>Careers</Text>
        </Flex>
        <Flex>
          <Image
            h={"25px"}
            src={"https://www.tendercuts.in/assets/delivery.png"}
          />
          <p>120&nbsp;Minutes&nbsp;Delivery</p>
        </Flex>
      </Flex>
    </Box>
  );
};
