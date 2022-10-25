import React, { useEffect, useState } from "react";
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


} from "@chakra-ui/react";
import axios from "axios";
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
function OtpModal({ data, firstModalisOpen, setIsOpen, mainfun }) {
  const [formData, setformData] = useState({
    address: "",
    flatNumber: "",
    landmark: "",
    pincode: "",
    number: ""
  })
  const [val, setval] = useState("");

  const [maindata, setmaindata] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstModalonClose = () => {
    setIsOpen(false);
  };
  const handleeverything = () => {

    mainfun(val)
    onOpen();
  };

  const handleAddAddress = async () => {
    try {
      let data = await axios.post("http://localhost:8080/address/create", formData)
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    setmaindata(data)
  }, [data])
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
                          <Input placeholder="Flat No." onChange={(e) => setformData((prev) => ({ ...prev, flatNumber: e.target.value }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Street" onChange={(e) => setformData((prev) => ({ ...prev, landmark: e.target.value }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Landmark" onChange={(e) => setformData((prev) => ({ ...prev, pincode: e.target.value }))} size={"md"} border="none" width={"99%"} />
                          <Input placeholder="Pincode" onChange={(e) => setformData((prev) => ({ ...prev, number: e.target.value }))} size={"md"} border="none" width={"99%"} />
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
                  </Drawer> ) : (
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
                        <Flex direction={"column"} align={"center"} gap={"5"}>
                          {maindata.map((el) => {
                            return <Box key={el._id}>
                              <Text>{el.address}</Text>
                              <Text>{el.flatNumber}</Text>
                              <Text>{el.landmark}</Text>
                              <Text>{el.pincode}</Text>

                            </Box>;
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
