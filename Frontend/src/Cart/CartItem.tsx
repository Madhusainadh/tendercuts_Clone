import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import  { useEffect, useState } from "react";

const CartItem = ({ obj }: any) => {
  const [data, setdata] = useState<any>({});

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/products/${obj.product}`)
        .then((res) => setdata(res.data));
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  console.log(data);
  return (
    <Box p={"10px"} w={"100%"}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text
            color={"#000000"}
            fontSize={"16px"}
            lineHeight={"19.2px"}
            textAlign={"left"}
          >
            {data.title}
          </Text>
        </Box>
        <Stack>
          <Text
            color={"#7e808c"}
            fontSize={"16px"}
            lineHeight={"19.2px"}
            textAlign={"right"}
          >
            ₹{data.price}
          </Text>
          <Text
            color={"#000000"}
            textDecoration={"line-through"}
            fontSize={"16px"}
            lineHeight={"19.2px"}
            textAlign={"right"}
          >
            ₹{data.mrp}
          </Text>
        </Stack>
      </Flex>
      <Flex>
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={"12px"}
          lineHeight={"18px"}
          bg={"#e9e3e3"}
          p={["6px", "10px"]}
          color={"#414b4e"}
          mr={"8px"}
          h={"32px"}
          w={"121px"}
        >
          <Text>Weight :{data.weight}</Text>
        </Box>
        <Flex w={"170px"} justifyContent="space-around">
          <Box
            alignSelf={"center"}
            bg={"#c11c2d"}
            borderRadius={"50%"}
            h="24px"
            w={"24px"}
            pl={"8px"}
            color={"white"}
          >
            -
          </Box>
          <Box
            h={"26px"}
            w={"33px"}
            fontSize={"18px"}
            lineHeight={"26px"}
            textAlign={"center"}
            color={"000000"}
          >
            {43}
          </Box>
          <Box
            alignSelf={"center"}
            bg={"#c11c2d"}
            borderRadius={"50%"}
            h="24px"
            w={"24px"}
            pl={"8px"}
            color={"white"}
          >
            +
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartItem;
