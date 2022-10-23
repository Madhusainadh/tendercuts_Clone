import React from "react";
import CheckoutOurBlog from "../CheckoutOurBlog/CheckoutOurBlog";
import ShopByMain from "../ShopbyCategory/ShopByMain";
import TopPickMain from "../TopPicksForYou/TopPickMain";
import { NavBar1 } from "./NavBar1";
import { Navbar2 } from "./Navbar2";

function HomePage() {
  return (
    <div>
      <NavBar1 />
      <Navbar2 />
      <ShopByMain />
      <TopPickMain />
      <CheckoutOurBlog />
    </div>
  );
}

export default HomePage;
