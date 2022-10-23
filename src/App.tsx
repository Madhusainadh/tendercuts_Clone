import { useState } from "react";
import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { NavBar1 } from "./Navbar/NavBar1";
import { Navbar2 } from "./Navbar/Navbar2";
import { PlacementExample } from "./Navbar/Drawer";
// import { Item } from './Itempage/Items';
import SingleItem from "./SingleItemPage/SingleItem";
import Topfooter from "./Footer/Topfooter";
import Allitems from "./Itempage/Allitems";

import { Outlet, Link } from "react-router-dom";
import AllRoutes from "./Allrouts/AllRoutes";
function App() {
  return (
    <div className="App">
      {/* <SingleItem/>
    <Allitems/>
  <Topfooter/> */}
    
      <AllRoutes />
      {/* <Link to={"/"}>all items</Link>
      <Link to={"/Item"}>Single item</Link> */}
    </div>
  );
}

export default App;
