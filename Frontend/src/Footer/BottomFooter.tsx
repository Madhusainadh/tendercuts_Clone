import { Box, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Buttonstyle.css"
const BottomFooter = () => {
  return (
    <Box bg={"#f7f6f6"}> 
    <Container p={"100px"} minH={256} maxWidth={"1200"}>
    <SimpleGrid  gap={"50px"} columns={[1,2,2,4]}  >
      <Stack>
        <Heading color={"#666666"} fontSize={"16px"}>
          COMPANY
        </Heading>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Privacy Policy</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer"  >Terms and Condition</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Help & Support</Text>
      </Stack>
      <Stack>
        <Heading color={"#666666"} fontSize={"16px"}>
          STAY CONNECTED
        </Heading>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >cs@tendercuts.in</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Chennai - 9543754375</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Hyderabad - 8282888855</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Bangalore - 8939091091</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Facebook</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Contact Us</Text>
      </Stack>
      <Stack>
        <Heading color={"#666666"} fontSize={"16px"}>
          LINKS
        </Heading>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Quality check</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Franchisee</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Refer Earn</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Store Location</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Careers</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" >Sitemap</Text>
      </Stack>

      <Stack>
        <Image    src="https://www.tendercuts.in/assets/app/app-store.png" />
        <Image  src="https://www.tendercuts.in/assets/app/play-store.png" />
      </Stack>
    </SimpleGrid>
    </Container>  </Box>
  );
};

export default BottomFooter;
