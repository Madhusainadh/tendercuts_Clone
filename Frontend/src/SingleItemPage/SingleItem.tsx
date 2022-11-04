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
import { useDispatch, useSelector } from "react-redux";
import {
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { sendItemfun } from "../Store/SinglePage/Singleitem.Module";
const SingleItem = () => {
  // const [object, setobject] = useState<any>();
  // const [d,setd] = useState([])
  // let [searchParams, setSearchParams] = useSearchParams();
  let { id } = useParams();
  console.log(id);
  // const dispatch = useDispatch<any>();
  // let i = searchParams.get("title");
  // let idparam = searchParams.get("id");
  // const callfun = async (id: any) => {
  // console.log("load")
  // await  dispatch(sendItemfun(id));
  // };
  // callfun(id);
  // useEffect(()=>{
  //   console.log("object")
  //   callfun(id)
  // },[])

  // let item

  let item = useSelector((state: any) => state.single);
  // setobject(item.allClients[0]);
     let singleitem = item.allClients[0];
    // let object = item.allClients[0]
    // console.log(item)
  // useEffect(()=>{
  //   setobject(singleitem)
  // },[])

  // console.log(object);

  // const callfun=async(id:any)=>{
  //     let res =await axios.get(`https://shy-pink-seal-hem.cyclic.app/items?id=${id}`).then((res)=>setobject(res.object[0]))
  //   // console.log(res)
  //   console.log(object)
  //   }

  console.log(singleitem.dis);
  console.log(singleitem.dis.split("&"));

  let d = singleitem.dis.split("&");
console.log("loadjinvnv")
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
            {singleitem.title}
          </Text>
          <Text
            textAlign={"center"}
            color={"#666666"}
            lineHeight={"21.6px"}
            fontSize={"14.4px"}
          >
            {singleitem.details}
          </Text>
        </Box>
        <SimpleGrid gap={"10px"} columns={[1, 1, 1, 2]}>
          <Box display={"flex"} justifyContent={"center"}>
            <Image w={"70%"} verticalAlign={"middle"} src={singleitem.image} />
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Container>
              <Box>
                <Stack spacing={3}>
                  {d?.map((e: any) => (
                    <Text color={"#7e808c"} fontSize={"16px"}>
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
                  <Text>Weight :{singleitem.weight}</Text>
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
                  <Text>Serves :{singleitem.Serves}</Text>
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
                    ₹{singleitem.mrp}
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
                    ₹{singleitem.price}
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
                >
                  ADD TO CART
                </Button>
                <Flex w={"170px"} justifyContent="space-around">
                  <Box
                    alignSelf={"center"}
                    bg={"#c11c2d"}
                    borderRadius={"50%"}
                    h="24px"
                    w={"24px"}
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
                    1
                  </Box>
                  <Box
                    bg={"#c11c2d"}
                    borderRadius={"50%"}
                    h="24px"
                    w={"24px"}
                    color={"white"}
                  >
                    +
                  </Box>
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
