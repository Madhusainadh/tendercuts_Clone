import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TPFYButton from "./TPFYButton";
type TPFYO = {
  image: string;
  title: string;
  strikedoff: string;
  realPrice: number;
};
function TopPickMain() {
  return (
    <>
      <Heading ml={"28"} size={"lg"} fontWeight={"bold"} color={"#CA2222"}>
        Top Picks For You
      </Heading>

      <Center>
        <SimpleGrid
          maxW={["100%", "90%", "85%"]}
          columns={[1, 1, 2, 2, 3]}
          color={"#565968"}
          fontFamily={"sans-serif"}
          // spacing="12"
          gap={"12"}
        >
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"60%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>

                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 269
                  </Text>
                </Flex>

                <TPFYButton />
              </Flex>
            </Box>
          </Box>
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              src={
                "https://assets.tendercuts.in/product/S/F/942f54c9-b0cb-4002-b3dd-6bdf8f4bd5f7.webp"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>{"Sardine - Mathi"}</Text>
              <Text>{"Fish gutted & packed without head"}</Text>
              <Flex justify={"space-around"}>
                <Flex
                  bg={"rgb(242,242,242)"}
                  minH={"36px"}
                  minW={"54%"}
                  align={"center"}
                  justify="space-evenly"
                >
                  <Text color={"black"}>Weight: 480 - 520 Gms</Text>
                </Flex>
                <Flex
                  bg={"rgb(242,242,242)"}
                  minH={"36px"}
                  minW={"40%"}
                  align={"center"}
                  justify="space-evenly"
                >
                  <Text color={"black"}>Net: 240 - 260 Gms</Text>
                </Flex>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 109</s>{" "}
                    </span>{" "}
                  </Text>

                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 89
                  </Text>
                </Flex>

                <TPFYButton />
              </Flex>
            </Box>
          </Box>
          <Box
            _hover={{ transform: "scale(1.01)" }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            borderRadius={["lg", "lg", "", ""]}
            minW={"377px"}
            minH={"354px"}
          >
            <Image
              borderRadius={["lg", "lg", "", ""]}
              // borderRadius={"lg"}
              src={
                "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg"
              }
            ></Image>
            <Box p={"4"}>
              <Text fontWeight={"bold"}>
                {"Chicken Curry Cut (Skin Off)-1Kg"}
              </Text>
              <Text>{"32 - 36 pieces"}</Text>
              <Flex
                bg={"rgb(242,242,242)"}
                minH={"36px"}
                maxW={"46%"}
                align={"center"}
                justify="space-evenly"
              >
                <Image
                  w={"8"}
                  src="https://www.tendercuts.in/assets/images/weight.png"
                ></Image>
                <Text color={"black"}>Weight: 960 - 1000 Gms</Text>
              </Flex>
              <Flex
                align={"center"}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Flex gap={"10"}>
                  <Text>
                    {" "}
                    MRP{" "}
                    <span>
                      {" "}
                      <s>&#x20b9; 299</s>{" "}
                    </span>{" "}
                  </Text>

                  <Text fontWeight={"bold"} color="black">
                    ELITE &#x20b9; 269
                  </Text>
                </Flex>

                <TPFYButton />
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Center>
    </>
  );
}

export default TopPickMain;
