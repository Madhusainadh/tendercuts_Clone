import { Box, Container,  Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import call from "./call.png"
import mail from "./mail.png";
import facebook from "./facebook.png";
import contact from "./contact.png"
import "./Buttonstyle.css"

const BottomFooter = () => {
  return (
    <Box  bg={"#f7f6f6"}> 
    <Container p={"100px"} minH={256} maxWidth={"1200"}>
    <SimpleGrid  gap={"50px"} columns={[1,1,2,4]}  >
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
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer"  display={"flex"} ><Image  m={"5px"} h={"20px"} src={mail} color={"#aaaaaa"}/>cs@tendercuts.in</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" display={"flex"}  ><Image m={"5px"} h={"20px"} src={call}  />Chennai - 9543754375</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" display={"flex"} ><Image  m={"5px"} h={"20px"} src={call}/>Hyderabad - 8282888855</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" display={"flex"} ><Image m={"5px"} h={"20px"} src={call}/>Bangalore - 8939091091</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" display={"flex"} ><Image m={"5px"} h={"20px"} src={facebook} />Facebook</Text>
        <Text fontSize={"16px"} color={"#aaaaaa"} cursor="pointer" display={"flex"} ><Image m={"5px"} h={"20px"} src={contact}/>Contact Us</Text>
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
