import { Flex, Heading, Image } from "@chakra-ui/react";

type prop = {
  src: string;
  text: string;
};
function CheckoutOurBlogIndiCompo({ src, text }: prop) {
  return (
    <Flex color={"#C11C2D"} direction={"column"} align={"center"}>
      <Image src={src} />
      <Heading size={"md"}>{text}</Heading>
    </Flex>
  );
}

export default CheckoutOurBlogIndiCompo;
