import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ItemCategoryfun } from "../Store/ItemCategory/ItemCategory.Module";
const cart = require("./cart.png");

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  const Onopenfun = () => {
    onOpen();
  };

  const { Category } = useSelector((state: any) => state.Category);

  let [data, setdata] = useState<any>([]);
  let [cartdata,setcartdata]=useState<any>([]);
  const dispatch = useDispatch<any>();
  // var urltitle = useParams();
  var title = "chicken";
  useEffect(() => {
    // console.log(title)
    dispatch(ItemCategoryfun(title));
  }, []);

  

  useEffect(() => {
    // console.log(Category)
    setdata(Category);
  }, [Category]);

useEffect(()=>{
  try{
     axios.get(`http://localhost:8080/cart/6373173c25b2bb95b32bfd6f`).then((res)=>setcartdata(res.data))

  }catch(err:any){
    console.log(err.message)
  }
},[])

  console.log(cartdata);
  return (
    <Box>
      <Button
        ref={btnRef}
        colorScheme="#c02332"
        onClick={Onopenfun}
        backgroundColor={"#c02332"}
      >
        <Flex gap={"20px"}>
          <Image w={"25px"} h={"25px"} src={cart} />
          <Heading as="h4" size="sm">
            Cart
          </Heading>
        </Flex>
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <Container maxW={"419px"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text
                fontSize={"16px"}
                lineHeight={"24px"}
                textAlign={"left"}
                textColor={"dark"}
                ml={4}
                fontWeight={"bold"}
                color={"#343a40"}
              >
                Order Summary
              </Text>
            </DrawerHeader>

            <DrawerBody>
              <Box bg={"#fff5f5"} h={"181"}>
                <Flex
                  gap={"20px"}
                  alignItems="center"
                  justifyContent="space-between"
                  mx={2}
                  borderWidth={0}
                  overflowX="auto"
                >
                  {data.map((e: any) => (
                    <Box>
                      <Box
                        h={"83px"}
                        width={"288px"}
                        bg={"#ffffff"}
                        boxShadow={"rgb(170, 170, 170) 0px 1px 5px 0.25px"}
                        borderRadius={"9.6px"}
                      >
                        <Flex>
                          <Image h={"70px"} w={"70px"} src={e.image} />

                          <Box pl={"20px"}>
                            <Text
                              fontSize={"14.4px"}
                              lineHeight={"21.6px"}
                              textAlign={"left"}
                              color={"#000000"}
                              noOfLines={1}
                            >
                              {e.title}
                            </Text>
                            <Text
                              fontSize={"16px"}
                              lineHeight={"24px"}
                              textAlign={"left"}
                              color={"#000000"}
                            >
                              {e.weight}
                            </Text>
                            <Flex justifyContent={"space-between"}>
                              <Box>
                                <Text
                                  fontSize={"17.6px"}
                                  lineHeight={"26.4px"}
                                  textAlign={"left"}
                                  color={"#000000"}
                                >
                                  ₹{e.price}
                                </Text>
                              </Box>
                              <Box
                                color={"#ffffff"}
                                fontWeight={"bold"}
                                float={"right"}
                                boxShadow={
                                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
                                }
                                bg={"#b71c1c"}
                                borderRadius={"2px"}
                                fontSize={"14px"}
                                lineHeight={"30px"}
                                textAlign={"center"}
                                h={"30px"}
                                w={"88px"}
                              >
                                ADD
                              </Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  ))}
                </Flex>
              </Box>

              <Box
                mt={"10px"}
                p={"5px"}
                h={"51px"}
                // w={"419px"}
                bg={"#2d9236"}
                color={"#f7f6f6"}
                fontSize={"14.4px"}
                lineHeight={"19.2px"}
                textAlign={"center"}
              >
                TenderCuts Elite Plan has been added to your cart, now enjoy
                Free delivery + product discounts.
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Container>
      </Drawer>
    </Box>
  );
}
