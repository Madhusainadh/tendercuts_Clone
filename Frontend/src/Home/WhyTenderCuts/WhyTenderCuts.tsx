import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import WTCCompo from "./WTCCompo";

function WhyTenderCuts() {
  return (
    <Flex  pt={"25px"}   direction={"column"} gap={"3"}>
             
 
      <Flex
       
        align={"center"}
        direction={"column"}
        m={"auto"}
        w={["100%", "95%", "90%", "85%"]}
      >
                     <Heading pb="15px" size={"md"}>Why TenderCuts?</Heading>

        <Center>
          <SimpleGrid
            border={"black"}
            columns={[1, 1, 3, 4, 5]}
            color={"#565968"}
            fontFamily={"sans-serif"}
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
    </Flex>
  );
}

export default WhyTenderCuts;
