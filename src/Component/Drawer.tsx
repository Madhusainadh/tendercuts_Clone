import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,

} from "@chakra-ui/react";
import { useState } from "react";

export function PlacementExample() {

  const [isOpen, setisOpen] = useState(false);
  const onOpen = () => {
    setisOpen(!isOpen);
  };
  const onClose = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Text>Some contents...</Text>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
