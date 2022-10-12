import { Box, SimpleGrid } from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import axios from "axios";
import { Item } from './Items';
const React = require("react")

const weight = require("./weight.png");

const Allitems = () => {
  

const getItems = async (type = "Chicken") => {
  let res = await axios.get(`https://shy-pink-seal-hem.cyclic.app/items?type=${type}`);

  return res;
};
let [data, setdata] = useState([]);
useEffect(() => {
  getItems().then((res) => setdata(res.data));
}, []);
  return (
    <Box maxW={"80%"}>
    <SimpleGrid columns={[1, 1, 1, 3]}>
      {data?.map((e: any) => (
        <Box>
  <Item id={e.id}  details={e.details} weight={e.weight} mrp={e.mrp} price={e.price} image={e.image} title={e.title} />
  </Box>
      ))}
  </SimpleGrid>
</Box>
  )
      }

export default Allitems