import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
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
  return (
    <div>
      <Box>
        <Heading>{data.title}</Heading>
        <Text>{data.details}</Text>
      </Box>
      <Container maxW={"1000px"}>
        <SimpleGrid gap={"10px"} columns={[1, 1, 1, 2]}>
          <Flex justifyContent={"center"}>
            {" "}
            <Box>
              <Image h={"400px"} w={"400px"} src={data.image} />
            </Box>
          </Flex>

          <Box>
            <Box>
              <Text>{data.dis}</Text>
            </Box>
            <Flex>
            <Box display={"flex"} alignItems={"center"} fontSize={"14px"} bg={"#e9e3e3"} p={["6px","10px"]} color={"#414b4e"}  mr={"8px"} h={"32px"} left={"16px"}   >
               
                <Text>Weight :{data.weight}</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} fontSize={"14px"} bg={"#e9e3e3"} p={["6px","10px"]} color={"#414b4e"}  mr={"8px"} h={"32px"} left={"16px"}   >
                <Text>Serves :{data.Serves}</Text>
              </Box>
            </Flex>
            <Flex>
              {" "}
              <Text>Price:₹{data.price}</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default SingleItem;
