import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const SingleItem = () => {
  let data = {
    title: "Dindigul Chicken Biryani Kit",
    details:
      "Serves: 2-3 | (Kit Contains:Seeraga Samba Rice 275 g + Chicken Biryani Cut 300 g Dindigul Biryani Paste 200 g)",
    image:
      "https://assets.tendercuts.in/product/C/O/e1caaea4-f778-4def-a6cb-73aebab62eeb.jpg",
    dis: "Do you remember the last time you prepared biryani and how long it took you to do it? It must have taken you somewhere around 2-3 hours, right? Dindigul chicken biryani kit can cut that time in more than half. The chicken pieces are there, the rice is part of the kit and the biryani paste too. It cooks in no time.",
    weight: "775 Gms",
    Serves: "2-3",
    price: 225,
    mrp: 267,
    stoke: 3,
    youtube: "https://youtu.be/x4ELWQRYkiA",
    type: "Biryani",
    id: 1,
  };
  return (
    <div>
      <Box>
        <Heading>{data.title}</Heading>
        <Text>{data.details}</Text>
      </Box>
      <Container  minW={"1000px"} >
      <Flex >
        <Box h={"400px"} w={"400px"}>
          <Image h={"400px"} w={"400px"} src={data.image} />
        </Box>
        <Box>
          <Text>{data.dis}</Text>
        </Box>
        <Flex>
          <Box>
            <span>Weight : </span>
            <Text>{data.weight}</Text>
          </Box>
          <Box>
            <span>Serves : </span>
            <Text>{data.Serves}</Text>
          </Box>
        </Flex>
        <Text>{data.price}</Text>
      </Flex>
      </Container>
    </div>
  );
};

export default SingleItem;
