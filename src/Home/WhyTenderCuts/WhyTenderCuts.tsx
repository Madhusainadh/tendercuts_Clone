import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import WTCCompo from "./WTCCompo";

function WhyTenderCuts() {
  return (
    <Flex
      minW={["100%", "97%", "90%", "85%"]}
      border={"2px"}
      direction={"column"}
      gap={"3"}
    >
      <Heading size={"md"}>Why TenderCuts?</Heading>
      <Center border={"2px"}>
        <SimpleGrid
          maxW={["100%", "90%", "85%"]}
          border={"black"}
          columns={[1, 1, 3, 4, 5]}
          color={"#565968"}
          fontFamily={"sans-serif"}
          // spacing="12"
          gap={"12"}
        >
          <WTCCompo
            logo="https://www.tendercuts.in/assets/tcuts-value/1.png"
            first="FRESHLY CUT"
            second="AFTER ORDER"
          />
          <WTCCompo
            logo="https://www.tendercuts.in/assets/tcuts-value/2.png"
            first="FARM FRESH"
            second="EVERYDAY"
          />
          <WTCCompo
            logo="https://www.tendercuts.in/assets/tcuts-value/4.png"
            first="SAFE &"
            second="HEALTHY"
          />
          <WTCCompo
            logo="https://www.tendercuts.in/assets/tcuts-value/3.png"
            first="ANTIBIOTIC"
            second="FREE"
          />
          <WTCCompo
            logo="https://www.tendercuts.in/assets/tcuts-value/5.png"
            first="LOCALLY"
            second="PRODUCED"
          />
        </SimpleGrid>
      </Center>
    </Flex>
  );
}

export default WhyTenderCuts;
