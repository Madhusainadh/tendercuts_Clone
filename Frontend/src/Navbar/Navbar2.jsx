import React, { useEffect } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Text,
  DrawerFooter,
  Box,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import TenderSVG from "./TenderSVG";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../Home/UserAuthContext";

import OtpModal from "./Modal";
import axios from "axios";
import DrawerExample from "../Cart/CartDrawer";

const pro = require("./pro.png");
const loc = require("./loc.png");

export const Navbar2 = () => {
  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phnumber, setphnumber] = useState("");
  const [fetch, setfetch] = useState("");
  const [modalBool, setmodalBool] = useState(false);
  const [result, setresult] = useState("");
  const { setupRecaptcha, name } = useUserAuth();
  const postuser = async () => {
    const { email, password } = formdata;
    if (!email || !password) {
      alert("please enter all the credentials");
    }
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      const { _id } = res;
      localStorage.setItem("email", _id);
      setfetch(_id);
    } catch (error) {}
  };
  const getOtp = async () => {
    try {
      const res = await setupRecaptcha(phnumber);
      setresult(res);
      setmodalBool(!modalBool);
    } catch (error) {
      alert(error.message);
    }
  };
  const getData = async (number) => {
    try {
      let res = await axios.post("http://localhost:8080/address/find", {
        number: number,
      });
      if (res.data.isFound) {
        setdata(res.data.data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const verifyOtp = async (main) => {
    try {
      let data = await result.confirm(main);
      getData(phnumber);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = async () => {
    await getOtp();
    await verifyOtp(phnumber);
    await postuser();
  };
  return (
    <Container
      maxW={"100%"}
      h={"50px"}
      bg={"rgb(202, 34, 34)"}
      top="0px"
      position="relative"
    >
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
              {name ? name : "Login/Signup"}
            </Button>
            <Drawer
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
                  <Flex direction={"column"} align={"flex-start"} gap={"5"}>
                    <Text color={"#CA2222"} fontWeight={"bold"}>
                      Log in / Create account to manage orders
                    </Text>
                    <Input
                      placeholder="please enter the email"
                      onChange={handleChange}
                      name={"email"}
                      type={"text"}
                    />
                    <Text>Password</Text>
                    <Input
                      placeholder="Enter the password"
                      onChange={handleChange}
                      name={"password"}
                      type={"text"}
                    />
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
                      onClick={handleSubmit}
                    >
                      Send OTP{" "}
                    </Button>
                    {/* <OtpModal
                      phnumber={phnumber}
                      data={data}
                      mainfun={verifyOtp}
                      firstModalisOpen={modalBool}
                      setIsOpen={setmodalBool}
                    /> */}
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
            </Drawer>
            <DrawerExample />
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
