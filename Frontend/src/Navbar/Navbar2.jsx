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
import { useDispatch, useSelector } from "react-redux";
import { Loginactions } from "../Store/auth/AuthActions";

const pro = require("./pro.png");
const loc = require("./loc.png");

export const Navbar2 = () => {
  const { data } = useSelector((store) => store.Auth);

  const dispatch = useDispatch();

  const [Loginformdata, setLoginformdata] = useState({
    email: "",
    password: "",
  });
  const [SignupformData, setsignupformData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    flatNumber: "",
    landmark: "",
    pincode: "",
    number: "",
  });
  const handleAddAddress = async () => {
    try {
      let res = await axios.post(
        "http://localhost:8080/address/create",
        SignupformData
      );
      const { data } = res;
      const { _id } = data;
      localStorage.setItem("email", _id);
      setfetch(_id);
      setsignupformData({
        name: "",
        email: "",
        password: "",
        address: "",
        flatNumber: "",
        landmark: "",
        pincode: "",
        number: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signup, setsignup] = useState(false);
  const [phnumber, setphnumber] = useState("");
  const [fetch, setfetch] = useState("");
  const [modalBool, setmodalBool] = useState(false);
  const [result, setresult] = useState("");
  const { setupRecaptcha, name } = useUserAuth();

  const postuser = async () => {
    const { email, password } = Loginformdata;
    if (!email || !password) {
      alert("please enter all the credentials");
    }
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });

      const { data } = res;
      const { _id } = data;

      localStorage.setItem("email", _id);
      setfetch(_id);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    dispatch(Loginactions());
  }, [fetch]);

  const getOtp = async () => {
    try {
      const res = await setupRecaptcha(phnumber);
      setresult(res);
      setmodalBool(!modalBool);
    } catch (error) {
      alert(error.message);
    }
  };
  // const getData = async (number) => {
  //   try {
  //     let res = await axios.post("http://localhost:8080/address/find", {
  //       number: number,
  //     });
  //     if (res.data.isFound) {
  //       setdata(res.data.data);
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const verifyOtp = async (main) => {
    try {
      let data = await result.confirm(main);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSubmit = async () => {
    await getOtp();
    await verifyOtp(phnumber);
    await postuser();
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("email");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
              {data.name ? data.name : "Login/Signup"}
            </Button>
            {data.name ? (
              <Drawer
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
                    <Flex minH={"82px"} align={"center"}>
                      <Flex align={"center"} justify={"center"} minW={"20%"}>
                        <Image src="./target.png" boxSize={"7"} />
                      </Flex>
                      <Box w={"80%"}>
                        <Text size={"lg"}>Add New Address</Text>
                      </Box>
                    </Flex>
                    <Flex direction={"column"} align={"center"} gap={"5"}>
                      <Heading>Addresses</Heading>
                      {/* {data.map((el) => {
                        return ( */}
                      <Flex
                        w={"95%"}
                        h={"130px"}
                        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                      >
                        <Flex
                          Flex
                          align={"center"}
                          justify={"center"}
                          minW={"20%"}
                        >
                          <Image src="./house-24.jpg" />
                        </Flex>
                        <Flex
                          w={"80%"}
                          align={"flex-start"}
                          direction={"column"}
                        >
                          <Text size={"lg"}>{data.address}</Text>
                          <Text size={"lg"}>{data.flatNumber}</Text>
                          <Text size={"lg"}>{data.landmark}</Text>
                          <Text size={"lg"}>{data.pincode}</Text>
                        </Flex>
                      </Flex>
                      {/* );
                      })} */}
                      <Button
                        bg={"red.600"}
                        color={"white"}
                        width={"99%"}
                        borderRadius={"md"}
                        size={"md"}
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            ) : !signup ? (
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
                        placeholder="Please enter the email"
                        onChange={(e) =>
                          setLoginformdata((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        name={"email"}
                        type={"text"}
                      />
                      <Text>Password</Text>
                      <Input
                        placeholder="Enter the password"
                        onChange={(e) =>
                          setLoginformdata((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
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
                      <Text
                        cursor={"pointer"}
                        onClick={() => setsignup(!signup)}
                        color={"red"}
                      >
                        Dont have an account? Signup Click here
                      </Text>
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
            ) : (
              <Drawer
                size={"sm"}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
              >
                <DrawerContent>
                  <Flex justify={"space-between"} align={"center"}>
                    <Heading fontSize={"lg"}>Sigup form</Heading>
                    <DrawerCloseButton />
                  </Flex>
                  <DrawerBody>
                    <Flex direction={"column"} align={"flex-start"} gap={"3"}>
                      <Text>Address</Text>
                      <Input
                        placeholder="Enter your Area"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                      />
                      <Text>Name</Text>
                      <Input
                        placeholder=" Please enter your Name"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        size={"md"}
                        border="none"
                        width={"99%"}
                      />
                      <Text>Email</Text>
                      <Input
                        placeholder="Please enter you email"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      ></Input>
                      <Text>Password</Text>
                      <Input
                        placeholder="Please enter your password"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                      ></Input>

                      <Text>Flat Number</Text>
                      <Input
                        placeholder={"Enter your flat Number (Optional)"}
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            flatNumber: e.target.value,
                            number: phnumber,
                          }))
                        }
                        size={"md"}
                        border="none"
                        width={"99%"}
                      />
                      <Text>Landmark</Text>
                      <Input
                        placeholder={"Enter your landmark"}
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            landmark: e.target.value,
                          }))
                        }
                        size={"md"}
                        border="none"
                        width={"99%"}
                      />
                      <Text>Pincode</Text>

                      <Input
                        placeholder=" Enter your Pincode"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            pincode: e.target.value,
                          }))
                        }
                        type="number"
                        size={"md"}
                        border="none"
                        width={"99%"}
                      />
                      <Text>Number</Text>
                      <Input
                        placeholder="Enter your phone number"
                        onChange={(e) =>
                          setsignupformData((prev) => ({
                            ...prev,
                            number: e.target.value,
                          }))
                        }
                        size={"md"}
                        border="none"
                        width={"99%"}
                      />
                      <Button
                        bg={"red.600"}
                        color={"white"}
                        onClick={handleAddAddress}
                        width={"99%"}
                        borderRadius={"md"}
                        size={"md"}
                      >
                        Save Address
                      </Button>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            )}

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
