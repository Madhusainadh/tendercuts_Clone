import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { NavBar1 } from './Component/NavBar1';
import { Navbar2 } from './Component/Navbar2';

function App() {

  return (
    <div className="App">


<NavBar1/>
<Navbar2/>
    </div>
  );
}

export default App;
