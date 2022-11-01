import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ItemCategoryfun } from "../../Store/ItemCategory/ItemCategory.Module";

type shopby = {
  title: string;
  image: string;
};
function ShopByCategoryCompo({ title, image }: shopby) {
  const navigate = useNavigate();
const dispatch = useDispatch<any>()

  const functionClick=(title:String)=>{
    dispatch(ItemCategoryfun(title))
setTimeout(() => {
  navigate("/Allitems")
}, 500);

  }


  return (
    <Box
      minW={["280px", "200px", "190px", "208px"]}
      minH={["280px", "200px", "190px", "208px"]}

      boxSize={"208px"}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      borderRadius={"lg"}
      className="huru"
      onClick={()=>functionClick(title)}
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
