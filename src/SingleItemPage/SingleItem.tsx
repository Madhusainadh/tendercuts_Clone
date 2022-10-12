import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SingleItem = () => {
  let data = {
    title: "Premium Goat Curry Cut [1 KG]",
    details: "35 to 40 piece",
    image:
      "https://assets.tendercuts.in/product/P/R/44e5fc66-bd7b-437c-aa09-c6873382bd09.webp",
    dis: "Tender and lean meat from the choicest cuts of goat - the front leg, shoulder and back are expertly cut and trimmed for our goat curry cut. Bursting with delicate earthy flavors and with fall-off-the-bone succulence, our goat curry cut can take you to gastronomic paradise.& Ideal for: Kerala mutton curry, Chettinadu mutton fry, Rogan josh, Rajasthanilalmaas& No of Pieces:35 to 40 & Freshness Indicator: The meat should be moist, brownish-red in color and cold to touch. When you press a finger into the fresh meat, the dentshould quickly disappear and the meat should bounce back to its original shape.",
    tip: "Tips: Most mutton curries require slow cooking on low heat to retain their moisture, juices and tenderness. The mutton should first be cooked over high heat to seal the juices and then cooked till tender on low heat.",
    weight: "960 - 980 Gms",
    Serves: "4 - 6",
    price: 809,
    mrp: 839,
    Pieces: " 35 to 40 piece ",
    youtube: "",
    type: "Mutton",
    id: 21,
  };
  let d = data.dis.split("&");
  console.log(d);
  return (
    <Box fontFamily={"sans-serif"} bg={"#f7f6f6"}>
      <Box>
        <Text fontSize={"28px"} lineHeight={"33.6px"} color={"#c2202f"}>
          {data.title}
        </Text>
        <Text color={"#666666"} lineHeight={"21.6px"} fontSize={"14.4px"}>
          {data.details}
        </Text>
      </Box>
      <Container maxW={"1300px"}>
        <SimpleGrid maxW={"1300px"} gap={"10px"} columns={[1, 1, 1, 2]}>
          <Box h={"400px"} w={"41.666667%"}>
            <Image w={"100%"} verticalAlign={"middle"} src={data.image} />
          </Box>
          <Box ml={"-200px"}>
            <Box>
              <Stack spacing={3}>
                {d.map((e) => (
                  <Text color={"#7e808c"} fontSize={"13px"}>
                    {e}
                  </Text>
                ))}
              </Stack>
            </Box>
            <Flex>
              <Box
                display={"flex"}
                alignItems={"center"}
                fontSize={"14px"}
                bg={"#e9e3e3"}
                p={["6px", "10px"]}
                color={"#414b4e"}
                mr={"8px"}
                h={"32px"}
                left={"16px"}
              >
                <Text>Weight :{data.weight}</Text>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                fontSize={"14px"}
                bg={"#e9e3e3"}
                p={["6px", "10px"]}
                color={"#414b4e"}
                mr={"8px"}
                h={"32px"}
                left={"16px"}
              >
                <Text>Serves :{data.Serves}</Text>
              </Box>
            </Flex>
            <Flex alignItems={"center"} gap={"50px"} mt={"9px"}>
              <Box>
                <Text
                  color={"#7e808c"}
                  fontSize={"20px"}
                  lineHeight={"normal"}
                  textAlign={"left"}
                  textDecoration={"line-through"}
                >
                  ₹{data.mrp}
                </Text>
                <Text
                  color={"#696969"}
                  textAlign={"left"}
                  fontSize={"9px"}
                  h={"15px"}
                  w={"42px"}
                >
                  MRP
                </Text>
              </Box>
              <Box w={"43px"}>
                {" "}
                <Text fontSize={"19.2px"} textAlign={"left"} color={"#000000"}>
                  ₹{data.price}
                </Text>
                <Text
                  h={"15px"}
                  color={"#696969"}
                  textAlign={"left"}
                  fontSize={"9px"}
                  w={"42px"}
                 
                >
                  ELITE
                </Text>
              </Box>

              <Button
                fontSize={"14px"}
                lineHeight={"30px"}
                textAlign={"center"}
                boxShadow={
                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
                }
                borderRadius={"2px"}
                bg={"#b71c1c"}
                color={"#ffffff"}
                colorScheme={"#b71c1c"}
              >
                ADD TO CART
              </Button>
              <Box alignSelf={"center"} bg={"#c11c2d"}  borderRadius={"50%"} h="24px" w={"24px"} color={"white"} >
-
                
              </Box>
              <Box h={"26px"} w={"33px"} fontSize={"18px"} lineHeight={"26px"}  textAlign={"center"} color={"000000"}   >
1
              </Box>
              <Box bg={"#c11c2d"}  borderRadius={"50%"} h="24px" w={"24px"} color={"white"} >
+
                
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SingleItem;
