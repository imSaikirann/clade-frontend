import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Right from './Right';
import Home from './Home';

export default function Layout() {
  return (
    <Flex>
      {/* First part (Home component) */}
      <Box flex="77%">
        <Home />
      </Box>
      
      {/* Second part (Right component) */}
      <Box flex="25%">
        <Right />
      </Box>
    </Flex>
  );
}
