import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
// import weight from "./weight.png"
const weight = require("./weight.png");

const getItems = async (type = "Chicken") => {
  let res = await axios.get(`http://localhost:8080/items?type=${type}`);

  return res;
};

export const Items = () => {
  let [data, setdata] = useState([]);
  useEffect(() => {
    getItems().then((res) => setdata(res.data));
  }, []);
  //   "title": "Dindigul Chicken Biryani Kit",
  //   "details": "Serves: 2-3 | (Kit Contains:Seeraga Samba Rice 275 g + Chicken Biryani Cut 300 g Dindigul Biryani Paste 200 g)",
  //   "image": "https://assets.tendercuts.in/product/C/O/e1caaea4-f778-4def-a6cb-73aebab62eeb.jpg",
  //   "dis": "Do you remember the last time you prepared biryani and how long it took you to do it? It must have taken you somewhere around 2-3 hours, right? Dindigul chicken biryani kit can cut that time in more than half. The chicken pieces are there, the rice is part of the kit and the biryani paste too. It cooks in no time.",
  //   "weight": "775 Gms",
  //   "Serves": "2-3",
  //   "price": 225,
  //   "mrp": 267,
  //   "stoke": 3,
  //   "youtube": "https://youtu.be/x4ELWQRYkiA",
  //   "type": "Biryani",
  //   "id": 1
  return (
    <Box maxW={"80%"}>
      <SimpleGrid columns={[1, 1,1, 3]}>
        {data.map((e: any) => (
          <Box w={379} h={"407"} key={e.id}>
            <>
              <Box>
                <Image w={["1000px","1000px","1000px","377px"]} h={"210px"} src={e.image} />
              </Box>
              <Box>
                <Heading
                  fontSize={"14px"}
                  lineHeight={"21px"}
                  textAlign={"left"}
                >
                  {e.title}
                </Heading>
                <Text fontSize={"12px"} lineHeight={"18px"} noOfLines={1}>
                  {e.details}
                </Text>
              </Box>
              <Box>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={143}
                  h={"36px"}
                  color={"#535665"}
                  bg={"#f2f2f2"}
                >
                  <Image w={"30px"} h={"30px"} src={weight} /> {e.weight}
                </Flex>
              </Box>
              <Box>
                <Flex w={"100%"}>
                  <Flex w={"60%"} gap={"15px"} justifyContent={"flex-start"}>
                    <Box>
                      <Text
                        color={"#7e808c"}
                        fontSize={"20px"}
                        lineHeight={"normal"}
                        textAlign={"left"}
                        textDecoration={"line-through"}
                      >
                        ₹{e.mrp}
                      </Text>
                      <Text
                        color={"#696969"}
                        textAlign={"left"}
                        fontSize={"9px"}
                        h={"9px"}
                        w={"42px"}
                      >
                        MRP
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        color={"#000000"}
                        fontSize={"20px"}
                        lineHeight={"normal"}
                        textAlign={"left"}
                      >
                        ₹{e.price}
                      </Text>{" "}
                      <Text
                        color={"#696969"}
                        textAlign={"left"}
                        fontSize={"9px"}
                        h={"9px"}
                        w={"42px"}
                      >
                        ELITE
                      </Text>
                    </Box>
                  </Flex>
                  <Flex justifyContent={"flex-start"} w={"40%"}>
                    <Button
                      h={"30px"}
                      w={"140px"}
                      bg={"#b71c1c"}
                      colorScheme={"#b71c1c"}
                    >
                      ADD TO CART
                    </Button>{" "}
                  </Flex>
                </Flex>
              </Box>
            </>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
