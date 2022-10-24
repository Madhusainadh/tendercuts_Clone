import React, { useState } from "react";
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
  Image,
} from "@chakra-ui/react";
type prop = {
  isOpen: boolean;
  setIsOpen: Function;
  mainfun: Function;
  render: boolean;
  secondfun: Function;
};
function OtpModal({ render, secondfun, isOpen, setIsOpen, mainfun }: prop) {
  const [val, setval] = useState<String>("");
  const onClose = () => {
    setIsOpen(false);
  };
  const handleeverything = async () => {
     mainfun(val);
    secondfun(true);
  };
  const handleDrawer = () => {
    secondfun(false);
  };
  return (
    <div>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
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
                <Drawer
                  size={"sm"}
                  isOpen={render}
                  placement="left"
                  onClose={handleDrawer}
                >
                  <DrawerContent>
                    <Flex justify={"space-between"} align={"center"}>
                      <DrawerCloseButton />
                    </Flex>

                    <DrawerBody>
                      <Flex direction={"column"} align={"center"} gap={"5"}>
                        <Text color={"#CA2222"} fontWeight={"bold"}>
                          Log in / Create account to manage orders
                        </Text>
                        <Text>Mobile Number</Text>

                        <Button
                          color={"white"}
                          bg={"#CA2222"}
                          width={"99%"}
                          borderRadius={"none"}
                          size={"md"}
                        >
                          Send OTP{" "}
                        </Button>

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
                <Button color={"black"} w={"50%"} size={"lg"} onClick={onClose}>
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
