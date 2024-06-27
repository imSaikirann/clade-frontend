import React from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';

const menuItems = [
  { type: 'link', text: 'Job preview', href: '#' },
  { type: 'link', text: 'Applicants', href: '#' },
  { type: 'link', text: 'Match', href: '#' },
  { type: 'text', text: 'Messages' },
];

export default function LowerMenu() {
  return (
    <Box w='100%' h="71px" display="flex" flexDirection="row" alignItems='center' justifyContent="flex-start" paddingLeft="6rem" border="1px solid #D9D9D9">
      <HStack spacing="24px">
        {menuItems.map((item, index) => (
          item.type === 'link' ? (
            <MenuItem key={index} href={item.href} h="71px">{item.text}</MenuItem>
          ) : (
            <TextItem key={index} h="71px">{item.text}</TextItem>
          )
        ))}
      </HStack>
    </Box>
  );
}

function MenuItem({ href, children }) {
  return (
    <Link
      href={href}
      borderBottom="2px solid transparent" // Start with a transparent border
      _hover={{
        borderBottom: '2px solid orange', // Change to orange on hover
        paddingBottom: '2px', // Padding for space under the border
      }}
      _focus={{
        outline: 'none', // Remove outline on focus
      }}
    >
      {children}
    </Link>
  );
}

function TextItem({ children }) {
  return (
    <Text
      _hover={{
        borderBottom: '2px solid orange', // Change to orange on hover
        paddingBottom: '2px', // Padding for space under the border
      }}
    >
      {children}
    </Text>
  );
}
