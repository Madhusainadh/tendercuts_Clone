import { Box, Container } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const AllcartItems = () => {
  let [cartdata, setcartdata] = useState<any>([]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/cart/6373173c25b2bb95b32bfd6f`)
        .then((res) => setcartdata(res.data));
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  console.log(cartdata);
  return (
    <Container maxW={"90%"}>
      {cartdata.map((e: any) => (
        <Box key={e._id}>
          <CartItem obj={e} />
        </Box>
      ))}
    </Container>
  );
};

export default AllcartItems;
