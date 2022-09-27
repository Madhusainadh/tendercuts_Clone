import React from "react";
import { PlacementExample } from "./Drawer";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  RadioGroup,
  Stack,
 
} from '@chakra-ui/react'
import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
const pro =  require("./pro.png")
const loc = require("./loc.png")
const ser = require("./ser.png")
const cart = require("./cart.png")
// import * as pro from "./pro.png";
// import loc from "./loc.png";
// import ser from "./ser.png";
// import cart from "./cart.png";

export const Navbar2 = () => {
  const [placement, setPlacement] = React.useState('top')
  const [isOpen,setisOpen]=useState(false)
const onOpen=()=>{
setisOpen(!isOpen)
}
const onClose=()=>{
  setisOpen(!isOpen)
}
  return (
    <Container maxW={"100%"} h={"50px"} bg={"rgb(202, 34, 34)"}>
      <Flex gap={"40px"} w={["100%"]}   >
        <Flex  w={"50%"}>
          <Image
            h={"50px"}
            
            src="https://www.tendercuts.in/assets/logo-white.png"
          />
          <Button mt={"5px"} bg={"none"}>
          
            <Image display={{
              base: "none",
              md: "flex",
            }} h={"35px"} src={loc} mt={"5px"} />
            <Heading display={{
              base: "none",
              md: "flex",
            }}  as={"h4"} size={"sm"}>
              THORAIPAKKAM&nbsp;STORE
            </Heading>
          </Button>
        </Flex>
        
        <Flex
       
        mt={"5px"} w={"50%"} justifyContent={"space-around"}>
        <Flex  display={{
          base: "none",
          md: "flex",
        }}>
        <Button bg={"none"} onClick={onOpen}  >
            <Flex gap={"10px"}>
              <Image w={"25px"} h={"25px"} src={ser} />
              <Heading as="h4" size="sm">
                SEARCH
              </Heading>
              <>
       
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>SEARCH</DrawerHeader>
            <DrawerBody>
             <Input placeholder="Search for product" />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
            </Flex>{" "}
          </Button>
{true?
          

          <Button bg={"rgb(202, 34, 34)"} >
          
            

            <Menu>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.400' }}
              _expanded={{ bg: 'blue.400' }}
              _focus={{ boxShadow: 'outline' }}
            >
            <Heading as="h4" size="sm">
            Profile
          </Heading> 
            </MenuButton>
            <MenuList>
              <MenuItem>New File</MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuItem>Save File</MenuItem>
            </MenuList>
          </Menu>
          </Button>:<Button><Heading as="h4" size="sm">
          Login/Signup
        </Heading> </Button>}
          
          <Button bg={"none"}>
            <Flex gap={"20px"}>
              <Image w={"25px"} h={"25px"} src={cart} />
              <Heading as="h4" size="sm">
                Cart
              </Heading>
            </Flex>
          </Button>
          </Flex> 
          <Image  mt={"5px"} display={{
            base: "flex",
            md: "none",
          }} h={"40px"} w={"40px"} src={pro}/>
        </Flex>
        
        
       
      </Flex>
    </Container>
  );
};
