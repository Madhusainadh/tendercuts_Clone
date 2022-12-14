import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

  Button,

  Flex,

 
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import  { useState } from "react";

function Add({ setmodal, modal }) {
  const [phnumber, setphnumber] = useState("");
  const [fetch, setfetch] = useState("");
  const toast = useToast();
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
      // let res = await axios.post(
      //   "http://localhost:8080/address/create/multiple",
      //   SignupformData
      // );
      // const { data } = res;
      // const { _id } = data;
      // localStorage.setItem("email", _id);
      // setfetch(_id);
      // setsignupformData({
      //   name: "",
      //   email: "",
      //   password: "",
      //   address: "",
      //   flatNumber: "",
      //   landmark: "",
      //   pincode: "",
      //   number: "",
      // });
      toast({
        title: "Oops",
        description: "sorry this feature is currently unavailable",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Oops",
        status: "error",
        description: "sorry this feature is currently unavailable",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const onClose = () => {
    setmodal(false);
  };
  return (
    <div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={modal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} align={"flex-start"} gap={"1"}>
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
                type="number"
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Add;
