import { Center, SimpleGrid } from "@chakra-ui/react";

import ShopByCategoryCompo from "./ShopByCategoryCompo";

function ShopByMain() {
  return (
    <Center>
      <SimpleGrid columns={[1, 2,3, 4, 5]} spacing="12" >
        <ShopByCategoryCompo
          title={"Elite Offers"}
          image={
            "https://assets.tendercuts.in/category/E/l/0cfcdf1a-be7c-431b-814f-d1bd6fb36fa2.jpg"
          }
        />
        <ShopByCategoryCompo
          title={"Biriyani"}
          image={
            "https://assets.tendercuts.in/category/B/i/8d4d5e9a-cc89-4dc1-87e0-50b8281f0dba.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Ready To Cook"}
          image={
            "https://assets.tendercuts.in/category/R/e/5428837f-7561-4fca-87a1-6ef16e93ff6d.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Chicken"}
          image={
            "https://assets.tendercuts.in/category/C/h/444c122b-a639-48ff-8078-5b9b5af74596.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Mutton"}
          image={
            "https://assets.tendercuts.in/category/M/u/96059dfe-3207-4fda-9b96-b99f07eea4dc.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Sea Food"}
          image={
            "https://assets.tendercuts.in/category/S/e/f9a8cb8c-ac77-44dd-9be2-e0e80c0db433.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Snacks"}
          image={
            "https://assets.tendercuts.in/category/S/n/bf308b26-957c-40ab-982d-6c3d18a97d8f.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Combo"}
          image={
            "https://assets.tendercuts.in/category/C/o/fb564e26-8a77-4350-8e38-f5073ec8eae6.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Cold Cuts"}
          image={
            "https://assets.tendercuts.in/category/C/o/3d7d3cd0-64ab-4285-8550-befd6cfc067a.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Eggs"}
          image={
            "https://assets.tendercuts.in/category/E/g/9bac6ab0-76b3-4462-baf3-93f1da9e1589.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Pickles"}
          image={
            "https://assets.tendercuts.in/category/P/i/6062b437-502a-4211-a1f9-100b563879b8.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Spices"}
          image={
            "https://assets.tendercuts.in/category/S/p/4bbffd68-1f98-45cc-9158-fa5e99cd7eae.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Party Pack"}
          image={
            "https://assets.tendercuts.in/category/P/a/fa6ca0ee-74a5-465c-b34f-be63d014aa8e.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Dry Fish"}
          image={
            "https://assets.tendercuts.in/category/D/r/4155199f-92a2-4eff-b84f-e47712fd2a87.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Dressings"}
          image={
            "https://assets.tendercuts.in/category/D/r/68cb6ac3-d7bb-46cc-8498-e088a75f1ed4.jpg"
          }
        />{" "}
        <ShopByCategoryCompo
          title={"Oils"}
          image={
            "https://assets.tendercuts.in/category/O/i/7de05f07-8a5a-450c-bae1-1b355d53dbbd.jpg"
          }
        />{" "}
      </SimpleGrid>
    </Center>
  );
}

export default ShopByMain;
