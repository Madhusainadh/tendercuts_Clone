import { Box, Center, Image, Text } from "@chakra-ui/react";


type shopby = {
  title: string;
  image: string;
};
function ShopByCategoryCompo({ title, image }: shopby) {
  return (

      <Box
        boxSize={"208px"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        borderRadius={"lg"}
        className="huru"
      >
        <Image src={image} alt={"image"} borderRadius={"lg"}></Image>
        <Center>
          <Text fontWeight={"bold"} color={"#C11C2D"} fontFamily={"sans-serif"}>
            {title}
          </Text>
        </Center>
      </Box>
   
  );
}

export default ShopByCategoryCompo;
