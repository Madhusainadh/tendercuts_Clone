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
} from "@chakra-ui/react";
type prop = {
  isOpen: boolean;
  setIsOpen: Function;
  mainfun: Function;
};
function OtpModal({ isOpen, setIsOpen, mainfun }: prop) {
  const [val, setval] = useState<String>("");
  const onClose = () => {
    setIsOpen(false);
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
                  onClick={() => mainfun(val)}
                >
                  Verify
                </Button>
                <Button color={"black"} w={"50%"} size={"lg"}>
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
