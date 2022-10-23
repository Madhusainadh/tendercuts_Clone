import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CheckoutOurBlogIndiCompo from "./CheckoutOurBlogIndiCompo";

function CheckoutOurBlog() {
  return (
    <SimpleGrid columns={[1, 2, 2, 3]}>
      <CheckoutOurBlogIndiCompo />
      <CheckoutOurBlogIndiCompo />
      <CheckoutOurBlogIndiCompo />

    </SimpleGrid>
  );
}

export default CheckoutOurBlog;
