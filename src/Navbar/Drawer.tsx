
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
    Button,
  } from '@chakra-ui/react'
import React, { useState } from 'react'

export function PlacementExample() {
    const [placement, setPlacement] = React.useState('top')
    const [isOpen,setisOpen]=useState(false)
  const onOpen=()=>{
setisOpen(!isOpen)
  }
  const onClose=()=>{
    setisOpen(!isOpen)
  }
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }