// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { NavBar1 } from './Navbar/NavBar1';
import { Navbar2 } from './Navbar/Navbar2';
import { PlacementExample } from './Navbar/Drawer';

function App() {

  return (
    <div className="App">


<NavBar1/>
<Navbar2/>
    </div>
  );
}

export default App;
