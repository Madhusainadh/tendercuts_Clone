import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Flex,
  Input,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Heading,
  Image,


} from "@chakra-ui/react";
import axios from "axios";
import { useUserAuth } from "../Home/UserAuthContext";
// type prop = {
//   firstModalisOpen: boolean;
//   setIsOpen: Function;
//   mainfun: Function;
//   data: Array<object>;
// };
// type el = {
//   address: string;
//   flatNumber: string;
//   landmark: string;
//   pincode: string;
//   number: Number;
// };
function OtpModal({ phnumber, data, firstModalisOpen, setIsOpen, mainfun }) {


  const [formData, setformData] = useState({
    name: "",
    address: "",
    flatNumber: "",
    landmark: "",
    pincode: "",
    number: ""
  })
  const { setname, name } = useUserAuth();

  const [val, setval] = useState("");

  const [maindata, setmaindata] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstModalonClose = () => {
    setIsOpen(false);
  };
  const handleeverything = () => {

    mainfun(val)
    onOpen();
    firstModalisOpen()
    setname(formData.name)

  };

  const handleAddAddress = async () => {
    try {

      let data = await axios.post("http://localhost:8080/address/create", formData)
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    setmaindata(data)

  }, [data, phnumber])

  return (
    <div>
      <Modal size={"xl"} isOpen={firstModalisOpen} onClose={firstModalonClose}>
        <ModalOverlay />
        <ModalContent gap={"15"}>
          <ModalHeader>OTP Verification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={"15"}>
              <Text>One Time Password has been sent to your mobile number</Text>
              <Text>Kindly check and enter below</Text>
              <Flex gap={"4"} align={"center"} justify={"space-around"}>
                <Input
                  type={"number"}
                  onChange={(e) => setval(e.target.value)}
                  size={"lg"}
                  placeholder="Enter OTP"
                ></Input>
                <Button
                  _hover={{ backgroundColor: "red.500" }}
                  color={"white"}
                  bg={"red.600"}
                  w={"50%"}
                  size={"lg"}
                  onClick={handleeverything}
                >
                  Verify
                </Button>
                {maindata.length === 0 ? (
                  <Drawer
                    size={"sm"}
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                  >
                    <DrawerContent>
                      <Flex justify={"space-between"} align={"center"}>
                        <Input placeholder="Enter your Area" onChange={(e) => setformData((prev) => ({ ...prev, address: e.target.value }))} />
                        <DrawerCloseButton />
                      </Flex>
                      <DrawerBody>
                        <Flex direction={"column"} align={"center"} gap={"5"}>
                          <Text color={"#CA2222"} fontWeight={"bold"}>
                            no data
                          </Text>
                          <Text>Mobile Number</Text>
                          <Input placeholder="Name" onChange={(e) => setformData((prev) => ({ ...prev, name: e.target.value }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Flat No." onChange={(e) => setformData((prev) => ({ ...prev, flatNumber: e.target.value, number: phnumber }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Street" onChange={(e) => setformData((prev) => ({ ...prev, landmark: e.target.value }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Landmark" onChange={(e) => setformData((prev) => ({ ...prev, pincode: e.target.value }))} size={"md"} border="none" width={"99%"} />

                          <Button
                            color={"white"}
                            borderColor={"#CA2222"}
                            onClick={handleAddAddress}
                            width={"99%"}
                            borderRadius={"sm"}
                            size={"md"}
                          >
                            Save Address
                          </Button>



                        </Flex>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>) : (
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
                          {maindata.map((el) => {
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
                  </Drawer>
                )}

                <Button
                  color={"black"}
                  w={"50%"}
                  size={"lg"}
                  onClick={firstModalonClose}
                >
                  Cancel
                </Button>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default OtpModal;
