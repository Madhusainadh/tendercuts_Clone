import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { sendItemfun } from "../Store/SinglePage/Singleitem.Module";
const SingleItem = () => {
  const [data, setdata] = useState<any>({});
  const [arr, setarr] = useState<any>([]);

  var id = useParams();
  let num = id.id;

  useEffect(() => {
    // console.log(num);
    try {
      axios
        .get(`http://localhost:8080/products/${num}`)
        .then((res) => setdata(res.data));
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    try {
      // console.log(data);

      let { dis } = data;
      let temp = dis.split("&");

      setarr(temp);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [data]);

  // console.log(data);

  // console.log(arr);

  const Addtocart = async (id: String) => {
    try {
      let data = await axios.post("http://localhost:8080/cart/create", {
        product: num,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProd = async (type: String) => {
    try {
      let data = await axios.post("http://localhost:8080/cart/update", {
        type: type,
        product: num,
      });
      console.log("data:", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      fontFamily={"sans-serif"}
      bg={"#f7f6f6"}
    >
      <Container maxW={"80%"} m={"50px"}>
        <Box p={"20px"}>
          <Text
            textAlign={"center"}
            fontSize={"28px"}
            lineHeight={"33.6px"}
            color={"#c2202f"}
          >
            {data.title}
          </Text>
          <Text
            textAlign={"center"}
            color={"#666666"}
            lineHeight={"21.6px"}
            fontSize={"14.4px"}
          >
            {data.details}
          </Text>
        </Box>
        <SimpleGrid gap={"10px"} columns={[1, 1, 1, 2]}>
          <Box display={"flex"} justifyContent={"center"}>
            <Image w={"70%"} verticalAlign={"middle"} src={data.image} />
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Container>
              <Box>
                <Stack spacing={3}>
                  {arr?.map((e: any) => (
                    <Text key={e} color={"#7e808c"} fontSize={"16px"}>
                      {e}
                    </Text>
                  ))}
                </Stack>
              </Box>
              <Flex>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"14px"}
                  bg={"#e9e3e3"}
                  p={["6px", "10px"]}
                  color={"#414b4e"}
                  mr={"8px"}
                  h={"32px"}
                  left={"16px"}
                >
                  <Text>Weight :{data.weight}</Text>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"14px"}
                  bg={"#e9e3e3"}
                  p={["6px", "10px"]}
                  color={"#414b4e"}
                  mr={"8px"}
                  h={"32px"}
                  left={"16px"}
                >
                  <Text>Serves :{data.Serves}</Text>
                </Box>
              </Flex>
              <SimpleGrid
                columns={[2, 2, 2, 4]}
                alignItems={"center"}
                gap={"50px"}
                mt={"9px"}
              >
                <Box>
                  <Text
                    color={"#7e808c"}
                    fontSize={"20px"}
                    lineHeight={"normal"}
                    textAlign={"left"}
                    textDecoration={"line-through"}
                  >
                    ₹{data.mrp}
                  </Text>
                  <Text
                    color={"#696969"}
                    textAlign={"left"}
                    fontSize={"9px"}
                    h={"15px"}
                    w={"42px"}
                  >
                    MRP
                  </Text>
                </Box>
                <Box w={"43px"}>
                  {" "}
                  <Text
                    fontSize={"19.2px"}
                    textAlign={"left"}
                    color={"#000000"}
                  >
                    ₹{data.price}
                  </Text>
                  <Text
                    h={"15px"}
                    color={"#696969"}
                    textAlign={"left"}
                    fontSize={"9px"}
                    w={"42px"}
                  >
                    ELITE
                  </Text>
                </Box>

                <Button
                  w={"170px"}
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
                  onClick={() => Addtocart(data._id)}
                >
                  ADD TO CART
                </Button>
                <Flex w={"170px"} justifyContent="space-around">
                  <Button
                    onClick={() => updateProd("asc")}
                    alignSelf={"center"}
                    bg={"#c11c2d"}
                    borderRadius={"50%"}
                    h="24px"
                    w={"24px"}
                    color={"white"}
                  >
                    -
                  </Button>
                  <Box
                    h={"26px"}
                    w={"33px"}
                    fontSize={"18px"}
                    lineHeight={"26px"}
                    textAlign={"center"}
                    color={"000000"}
                  >
                    1
                  </Box>
                  <Button
                    onClick={() => updateProd("desc")}
                    bg={"#c11c2d"}
                    borderRadius={"50%"}
                    h="24px"
                    w={"24px"}
                    color={"white"}
                  >
                    +
                  </Button>
                </Flex>
              </SimpleGrid>
            </Container>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SingleItem;
