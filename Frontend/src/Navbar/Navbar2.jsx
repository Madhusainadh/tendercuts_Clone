

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Text,
  Box,

} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,

} from "@chakra-ui/react";
import TenderSVG from "./TenderSVG";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../Home/UserAuthContext";

import OtpModal from "./Modal";
import axios from "axios";

const pro = require("./pro.png");
const loc = require("./loc.png");

const cart = require("./cart.png");

export const Navbar2 = () => {

  const [data, setdata] = useState([])


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phnumber, setphnumber] = useState("");
  const [error, seterror] = useState("")
  const [modalBool, setmodalBool] = useState(false)
  const [result, setresult] = useState("")
  const { setupRecaptcha } = useUserAuth();



  const getOtp = async () => {

    try {
      const res = await setupRecaptcha(phnumber);
      setresult(res)
      setmodalBool(!modalBool)
    } catch (error) {
      alert(error.message)
    }
  };
  const getData = async (number) => {
    try {
      let res = await axios.post("http://localhost:8080/address/find", { number: number })
      if (res.data.isFound) {
        setdata(res.data.data)
        localStorage.setItem("data", JSON.stringify(res.data.data))

      }

    } catch (error) {
      alert(error.message)
    }

  }

  // useEffect(() => {

  // }, [])
  // useEffect(() => {
  //   data.length == 0 ? setdata(JSON.parse(localStorage.getItem("data"))) : setdata(data)


  // }, [])
  // setname(data[0].name)
  // console.log(data[0].name)

  // console.log(name);
  const verifyOtp = async (main) => {

    try {
      let data = await result.confirm(main)
      getData(phnumber)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Container maxW={"100%"} h={"50px"} bg={"rgb(202, 34, 34)"}>
      <Flex gap={"40px"} w={["100%"]}>
        <Flex w={"50%"}>
          <Image
            h={"50px"}
            src="https://www.tendercuts.in/assets/logo-white.png"
          />
          <Button mt={"5px"} bg={"none"}>
            <Image
              display={{
                base: "none",
                md: "flex",
              }}
              h={"35px"}
              src={loc}
              mt={"5px"}
            />
            <Heading
              display={{
                base: "none",
                md: "flex",
              }}
              as={"h4"}
              size={"sm"}
            >
              THORAIPAKKAM&nbsp;STORE
            </Heading>
          </Button>
        </Flex>

        <Flex mt={"5px"} w={"50%"} justifyContent={"space-around"}>
          <Flex
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <Button
              _hover={{ backgroundColor: "#CA2222" }}
              bg={"#CA2222"}
              color={"white"}
              onClick={onOpen}
            >

              {data.length == 0 ? "Login" : data[0].name}
              {/* {data[0].name == undefined ? "Login/Signup" : data[0].name} */}
            </Button>
            {
              data.length === 0 ? (<Drawer
                size={"sm"}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
              >
                <DrawerContent>
                  <Flex justify={"space-between"} align={"center"}>
                    <DrawerCloseButton />
                    <TenderSVG />
                  </Flex>

                  <DrawerBody>
                    <Flex direction={"column"} align={"center"} gap={"5"}>
                      <Text color={"#CA2222"} fontWeight={"bold"}>
                        Log in / Create account to manage orders
                      </Text>
                      <Text>Mobile Number</Text>
                      <PhoneInput
                        style={{
                          width: "95%",
                          height: "50px",

                        }}
                        defaultCountry="IN"
                        value={phnumber}
                        onChange={setphnumber}
                        placeholder="Please enter your 10-digit Phone number"
                      />
                      <div id="recaptcha-container" />
                      <Button
                        color={"white"}
                        bg={"#CA2222"}
                        width={"99%"}
                        borderRadius={"none"}
                        size={"md"}
                        onClick={getOtp}
                      >
                        Send OTP{" "}
                      </Button>
                      <OtpModal phnumber={phnumber} data={data} mainfun={verifyOtp} firstModalisOpen={modalBool} setIsOpen={setmodalBool} />
                      <Text>Shop from anywhere , Download our app now!</Text>
                      <Flex align={"center"} w={"80%"}>
                        <a
                          target={"_blank"}
                          href="https://apps.apple.com/in/app/tendercuts-farm-fresh-meat-and-fresh-fish/id1236186604"
                        >
                          <Image src="https://www.tendercuts.in/assets/app/app-store.png" />
                        </a>
                        <a
                          target={"_blank"}
                          href="https://play.google.com/store/apps/details?id=com.tendercuts.app"
                        >
                          <Image src="https://www.tendercuts.in/assets/app/play-store.png" />
                        </a>
                      </Flex>
                    </Flex>
                  </DrawerBody>

                </DrawerContent>

              </Drawer>) : (<Drawer
                size={"sm"}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
              >
                <DrawerContent>
                  <Flex justify={"space-between"} align={"center"}>
                    <DrawerCloseButton />
                  </Flex>

                  <DrawerBody>
                    <Flex border={"2px"} minH={"82px"} align={"center"}>
                      <Flex align={"center"} justify={"center"} minW={"20%"}>
                        <Image src="./target.png" boxSize={"7"} />
                      </Flex>
                      <Box w={"80%"} >
                        <Text size={"lg"}>
                          Add New Address
                        </Text>
                      </Box>
                    </Flex>
                    <Flex direction={"column"} align={"center"} gap={"5"}>
                      <Heading>Addresses</Heading>
                      {data.map((el) => {
                        return <Flex key={el._id} w={"95%"} h={"130px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                          <Flex Flex align={"center"} justify={"center"} minW={"20%"}>
                            <Image src="./house-24.jpg" />
                          </Flex>
                          <Flex w={"80%"} align={"flex-start"} direction={"column"}>

                            <Text size={"lg"}>{el.address}</Text>
                            <Text size={"lg"}>{el.flatNumber}</Text>
                            <Text size={"lg"}>{el.landmark}</Text>
                            <Text size={"lg"}>{el.pincode}</Text>
                          </Flex>

                        </Flex>;
                      })}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>)
            }
            <Button bg={"none"}>
              <Flex gap={"20px"}>
                <Image w={"25px"} h={"25px"} src={cart} />
                <Heading as="h4" size="sm">
                  Cart
                </Heading>
              </Flex>
            </Button>
          </Flex>
          <Image
            mt={"5px"}
            display={{
              base: "flex",
              md: "none",
            }}
            h={"40px"}
            w={"40px"}
            src={pro}
          />
        </Flex>
      </Flex>
    </Container>
  );
};
