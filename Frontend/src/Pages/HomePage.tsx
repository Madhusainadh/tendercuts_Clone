import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CheckoutOurBlog from "../Home/CheckoutOurBlog/CheckoutOurBlog";
import TenderCutsAccordion from "../Home/HomePageAccordion/TenderCutsAccordion";
import HomeSlider from "../Home/HomeSlider/HomeSlider";
import ShopByMain from "../Home/ShopbyCategory/ShopByMain";
import TopPickMain from "../Home/TopPicksForYou/TopPickMain";
import WhyTenderCuts from "../Home/WhyTenderCuts/WhyTenderCuts";


function HomePage() {
  return (
    <>
      <HomeSlider />
      <WhyTenderCuts />
      <ShopByMain />
      <TopPickMain />
      <CheckoutOurBlog />
      <TenderCutsAccordion />
    </>
  );
}

export default HomePage;
