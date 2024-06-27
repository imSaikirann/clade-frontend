import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import './App.css';


import Navbar from './components/Navbar';
import LowerMenu from './components/LowerMenu';
import Layout from './components/Layout';

function App() {
  return (
    <ChakraProvider>
      <div className="App" w="1728px" >
        <Navbar/>
        <LowerMenu/>
       <Layout/>
       
      </div>
    </ChakraProvider>
  );
}

export default App;
