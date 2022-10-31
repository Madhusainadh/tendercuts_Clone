import { Box, Heading, Image, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import { randomFillSync } from "crypto";
import React, { useState } from "react";

export const Topfooter = () => {

  const [t, sett] = useState<number>(0);
  let text = [
    "How TenderCuts is rebooting meat business in India with its Omnichannel Play",
    "This company is breaking barriers by hiring women butchers",
    "We introduced 'contactless retail' services to help maintain social distancing.",
  ];
  return (
    <Box  borderColor={"000000"} bg={"#f7f6f6"}>
      <Progress size='xs' isIndeterminate />
      <Heading p={"30px"}  textAlign={"center"} fontSize={"28px"}  color={"000000"} lineHeight={"33px"}>
        "{text[t]}"
      </Heading>
      <SimpleGrid mb={"40px"} gap={"20px"} placeItems={"center"}  justifyContent={"space-around"} columns={[1, 1, 2, 3]}>
        <Box h={"80px"} w={"180px"} onMouseEnter={() => sett(0)}>
          <Image
            src={
              "https://cdn2.tendercuts.in/news_article/c71133d6-b26b-4d66-bd87-49ff4b7e81a4.png"
            }
          />
        </Box>
        <Box h={"80px"} w={"180px"} onMouseEnter={() => sett(1)}>
          <Image src="https://cdn2.tendercuts.in/news_article/588c1812-43f2-476f-8809-bb4f952a1799.png" />
        </Box>
        <Box
        placeItems={"center"}
          h={"80px"}
          w={"180px"}
          display={"flex"}
          justifyContent={"center"}
          onMouseEnter={() => sett(2)}
        >
          <Image src="https://cdn2.tendercuts.in/news_article/8a9bba70-12b3-4784-b8a9-4f6d92a861e4.png" />
        </Box>
      </SimpleGrid>
      <Progress size='xs' isIndeterminate />
    </Box>
  );
};




// export default {Topfooter ,BottomFooter};


