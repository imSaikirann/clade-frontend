import React from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';

const menuItems = [
  { text: 'Job preview', href: '#' },
  { text: 'Applicants', href: '#' },
  { text: 'Match', href: '#' },
  { text: 'Messages', href: '#' },
];

export default function LowerMenu() {
  return (
    <Box
      fontFamily="Poppins"
      w='100%'
      h="71px"
      display="flex"
      flexDirection="row"
      alignItems='center'
      justifyContent="flex-start"
      paddingLeft="6rem"
      border="1px solid #D9D9D9"
    >
      <HStack spacing="36px">
        {menuItems.map((item, index) => (
          <MenuItem key={index} href={item.href} text={item.text} index={index} />
        ))}
      </HStack>
    </Box>
  );
}

function MenuItem({ href, text, index }) {
  return (
    <Link
      href={href}
      color="#888888"
      borderBottom="5px solid transparent"
      _hover={index === 0 ? {
        borderBottom: '2px solid orange',
        paddingBottom: '2px',
        color: "#DC4A2D"
      } : {
        color: "#DC4A2D"
      }}
      _focus={{
        outline: 'none',
        color: "#DC4A2D"
      }}
    >
      <Text lineHeight="71px">{text}</Text>
    </Link>
  );
}
