import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

import { sendItemfun } from "../Store/SinglePage/Singleitem.Module";

const weighticon = require("./weight.png");



export const Item = ({
  id,
  image,
  title,
  details,
  weight,
  mrp,
  price,
}: any) => {
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const Redirectonclickfun =async ({
    id,
    image,
    title,
    details,
    weight,
    mrp,
    price,
  }: any) => {
    console.log(id, image, title, details, weight, mrp, price);
 await  dispatch(sendItemfun(id));

    // setTimeout(() => {
      navigate("/Item");
  
    // }, 0);
    
  };

  return (
 
    <Box
      p={"20px"}
      key={id}
      onClick={() =>
        Redirectonclickfun({ id, image, title, details, weight, mrp, price })
      }
    >
      <>
        <Box>
          <Image
            w={["1000px", "1000px", "1000px", "377px"]}
            h={"210px"}
            src={image}
          
          ></Image>

        </Box>
        <Box>
          <Heading fontSize={"14px"} lineHeight={"21px"} textAlign={"left"}>
            {title}
          </Heading>
          <Text fontSize={"12px"} lineHeight={"18px"} noOfLines={1}>
            {details}
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
            <Image w={"30px"} h={"30px"} src={weighticon} /> {weight}
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
                  ₹{mrp}
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
                  ₹{price}
                </Text>
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
            </Flex>
          </Flex>
        </Box>
      </>
    </Box>
    //     ))}
    //   </SimpleGrid>
    // </Box>
  );
};
