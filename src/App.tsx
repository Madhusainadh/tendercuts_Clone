// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { NavBar1 } from './Navbar/NavBar1';
import { Navbar2 } from './Navbar/Navbar2';
import { PlacementExample } from './Navbar/Drawer';
import { Items } from './Itempage/Items';
import SingleItem from './SingleItemPage/SingleItem';
import Topfooter from './Footer/Topfooter';

function App() {

  return (
    <div className="App">

<NavBar1/>
<Navbar2/>
<SingleItem/>
<Items/>
<Topfooter/>

    </div>
  );
}

export default App;
