import { Center, Heading, SimpleGrid } from "@chakra-ui/react";

import CheckoutOurBlogIndiCompo from "./CheckoutOurBlogIndiCompo";

function CheckoutOurBlog() {
  return (
    <>
      <Heading>Checkout Our Blog</Heading>
      <Center>
        <SimpleGrid
          gap={"12"}
          maxW={["100%", "90%", "85%"]}
          columns={[1, 2, 2, 3]}
        >
          <CheckoutOurBlogIndiCompo
            src={
              "https://tendercutsblog.files.wordpress.com/2022/09/new-marinades.jpg?w=1134&h=630"
            }
            text={"Be Party-Ready With The All-New Ten.."}
          />
          <CheckoutOurBlogIndiCompo
            src={
              "https://tendercutsblog.files.wordpress.com/2022/09/know-your-meat.jpg?w=1134&h=630"
            }
            text={"<strong>Know The Quality Of Meat Y..."}
          />
          <CheckoutOurBlogIndiCompo
            src={
              "https://tendercutsblog.files.wordpress.com/2022/08/sea-food-thumbnail.jpg?w=1134&h=630"
            }
            text={"Seafood Fishing Season In India"}
          />
        </SimpleGrid>
      </Center>
    </>
  );
}

export default CheckoutOurBlog;
