import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CheckoutOurBlog from "../Home/CheckoutOurBlog/CheckoutOurBlog";
import TenderCutsAccordion from "../Home/HomePageAccordion/TenderCutsAccordion";
import ShopByMain from "../Home/ShopbyCategory/ShopByMain";
import TopPickMain from "../Home/TopPicksForYou/TopPickMain";
import WhyTenderCuts from "../Home/WhyTenderCuts/WhyTenderCuts";
import { NavBar1 } from "../Navbar/NavBar1";
import { Navbar2 } from "../Navbar/Navbar2";

function HomePage() {
  return (
    <>
      <NavBar1 />
      <Navbar2 />

      <WhyTenderCuts />
      <ShopByMain />
      <TopPickMain />
      <CheckoutOurBlog />
      <TenderCutsAccordion />
    </>
  );
}

export default HomePage;
