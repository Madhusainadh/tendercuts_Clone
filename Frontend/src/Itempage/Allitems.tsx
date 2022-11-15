import { Box, Container, Image, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "./Items";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { ItemCategoryfun } from "../Store/ItemCategory/ItemCategory.Module";
const React = require("react");
const weight = require("./weight.png");

const Allitems = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  const {Category} = useSelector((state: any) => state.Category);

  let [data, setdata] = useState<any>([]);
  const dispatch = useDispatch<any>()
  var urltitle = useParams();
  var title = urltitle.type;
  useEffect(()=>{
    // console.log(title)
    dispatch(ItemCategoryfun(title))
    
  },[])

  useEffect(() => {
    // console.log(Category)
    setdata(Category)
  }, [Category]);


  // console.log(data)


 


  return (
    <Container maxW={"90%"}>
    <Box >
      <SimpleGrid columns={[1, 1, 2, 3]}>
        {data?.map((e: any) => (
          <Box key={e._id}   position="relative" >
            <Image top={"10"} left="30px" position={"absolute"} src="https://www.tendercuts.in/assets/products/antibiotic_small.png" alt="" />
            <Item
              id={e._id}
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
