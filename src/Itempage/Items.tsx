import React,{useEffect} from 'react'

import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
// import weight from "./weight.png"
const weight = require("./weight.png")


const getItems=async (type="Biryani")=>{
    let res = await axios.get(`http://localhost:8080/items?type=${type}`)
    
    console.log(res.data)
}


export const Items = () => {
    useEffect(() => {
getItems()
    }, [])
  
  return (
    <div>
        
        <Box w={379} h={"407"}>
         <Box>
            <Image w={"377px"} h={"210px"} src={"https://assets.tendercuts.in/product/C/O/7dad0dc6-109c-4b96-bd37-688ec666da55.jpg"} />

         </Box>
         <Box>
            <Heading fontSize={"14px"} lineHeight={"21px"} textAlign={"left"} >Ambur Mutton Biryani Kit</Heading>
            <Text fontSize={"12px"} lineHeight={"18px"}  noOfLines={1}>Serves: 2-3 | (Kit Contains: Seeraga Samba Rice 275 g + Mutton Biryani Cut 300 g + Ambur Biryani Paste 200 g)</Text>
         </Box>
         <Box>
            <Flex justifyContent={"center"} alignItems={"center"} w={143} h={"36px"} color={"#535665"} bg={"#f2f2f2"} ><Image w={"30px"} h={"30px"} src={weight}/> 775Gms</Flex>
         </Box>
         <Box>
            <Flex><Box>₹405</Box><Box>₹389</Box> <Button bg={"#b71c1c"} >ADD TO CART</Button> </Flex>
         </Box>
        </Box>
    </div>
  )
}
