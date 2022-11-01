import { Box, Container, Image, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "./Items";
import { useSelector } from "react-redux";
const React = require("react");
const weight = require("./weight.png");

const Allitems = () => {

  const {Category} = useSelector((state: any) => state.Category);
  // const getItems = async (type = "Chicken") => {
  //   let res = await axios.get(
  //     `https://shy-pink-seal-hem.cyclic.app/items?type=${type}`
  //   );

  //   return res;
  // };
  let [data, setdata] = useState([]);
  useEffect(() => {
    console.log(Category)
    setdata(Category)
  }, [Category]);
  return (
    <Container maxW={"90%"}>
    <Box >
      <SimpleGrid columns={[1, 1, 2, 3]}>
        {data?.map((e: any) => (
          <Box key={e.id}   position="relative" >
            <Image top={"10"} left="30px" position={"absolute"} src="https://www.tendercuts.in/assets/products/antibiotic_small.png" alt="" />
            <Item
              id={e.id}
              details={e.details}
              weight={e.weight}
              mrp={e.mrp}
              price={e.price}
              image={e.image}
              title={e.title}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    </Container>
  );
};

export default Allitems;
