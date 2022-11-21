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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PayButton from "../PaypalButton/PayButton";
import { CartContext } from "../Store/AuthContext";
import { ItemCategoryfun } from "../Store/ItemCategory/ItemCategory.Module";
const cart = require("./cart.png");

export default function DrawerExample() {
  const { cartcono, setcartcono, totalw, settotalw } = useContext(CartContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  const Onopenfun = () => {
    onOpen();
  };
  const toast = useToast();
  // const { Category } = useSelector((state: any) => state.Category);

  let [data, setdata] = useState<any>([]);
  let [cartdata, setcartdata] = useState<any>([]);
  const [carttot, setcarttot] = useState<number>(0);
  const dispatch = useDispatch<any>();
  // var title = "chicken";
  // useEffect(() => {
  //   dispatch(ItemCategoryfun(title));
  // }, []);
  const updateProd = async (type: String, id: string) => {
    try {
      let data = await axios.post("http://localhost:8080/cart/update", {
        type: type,
        product: id,
      });
      setcartcono(!cartcono);
      toast({
        title: "Cart updated",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   setdata(Category);
  // }, [Category]);
  const getCart = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/cart`);
      const { data } = res;
      toast({
        title: "Item added successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      
      
      setcartdata(data);
      const FullPrice = cartdata.reduce((acc: number, el: any) => {
        const {
          product: { price },
          quantity,
        } = el;

        return acc + Number(price) * quantity;
      }, 0);

      setcarttot(FullPrice);

      settotalw(FullPrice);
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    getCart();
  }, [cartcono]);

  const deleteItem = async (id: string) => {
    try {
      let data = await axios.post("http://localhost:8080/cart/remove", {
        product: id,
      });
      setcartcono(!cartcono);
      toast({
        title: "Cart updated",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
              <Box bg={"#fff5f5"}>
                <Flex
                  w={"100%"}
                  direction={"column"}
                  gap={"20px"}
                  alignItems="center"
                  justifyContent="space-between"
                  borderWidth={0}
                  overflowX="auto"
                >
                  {cartdata.map((e: any) => (
                    <Box w={"100%"} key={e.product._id}>
                      <Box
                        // h={"83px"}
                        w={"100%"}
                        bg={"#ffffff"}
                        boxShadow={"rgb(170, 170, 170) 0px 1px 5px 0.25px"}
                        borderRadius={"9.6px"}
                      >
                        <Flex>
                          <Image w={"25%"} src={e.product.image} />

                          <Flex w={"75%"} direction={"column"}>
                            <Text
                              fontSize={"14.4px"}
                              lineHeight={"21.6px"}
                              textAlign={"left"}
                              color={"#000000"}
                              noOfLines={1}
                            >
                              {e.product.title}
                            </Text>
                            <Text
                              fontSize={"16px"}
                              lineHeight={"24px"}
                              textAlign={"left"}
                              color={"#000000"}
                            >
                              {e.product.weight}
                            </Text>

                            <Box>
                              <Text
                                fontSize={"17.6px"}
                                lineHeight={"26.4px"}
                                textAlign={"left"}
                                color={"#000000"}
                              >
                                ₹{e.product.price}
                              </Text>
                            </Box>
                            <Flex
                              gap={"4"}
                              align={"center"}
                              justify={"space-around"}
                            >
                              <Button
                                onClick={() => updateProd("asc", e.product._id)}
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
                              >
                                +
                              </Button>
                              <Heading size={"md"}>{e.quantity}</Heading>
                              <Button
                                onClick={() =>
                                  updateProd("desc", e.product._id)
                                }
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
                              >
                                -
                              </Button>
                              <Button
                                onClick={() => deleteItem(e.product._id)}
                                color={"#ffffff"}
                                boxShadow={
                                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"
                                }
                                bg={"#b71c1c"}
                              >
                                Remove
                              </Button>
                            </Flex>
                            {/* <Box
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
                              </Box> */}
                          </Flex>
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
              <Flex justify={"space-between"}>
                <Heading size={"md"}>Your Cart Total is</Heading>
                <Heading size={"md"}> INR {carttot}</Heading>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">
                <PayButton />
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Container>
      </Drawer>
    </Box>
  );
}
