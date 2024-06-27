import React from 'react';
import { Box, Button,  HStack, Image, Text, VStack } from '@chakra-ui/react';

export default function Footer() {
  // Example data array
  const companyInfo = [
    {
      title: 'Company size',
      value: '1k - 2k Employees'
    },
    {
      title: 'Sector',
      value: 'Information Technology, Infrastructure'
    },
    {
      title: 'Founded In',
      value: '2019'
    }
  ]; 

  const companyInfo1 = [
    {
      title: 'Type',
      value: 'Private'
    },
    {
      title: 'Funding',
      value: 'Bootstrapped'
    },
    {
      title: 'Founded By',
      value: 'Scott Farquhar, Mike Cannon-Brookes'
    }
  ];

  return (
    <Box fontFamily='
Poppins' w="100%" h="350px" color="#FFFFFF" border=" 1px solid #E7E7E7" paddingLeft="6rem" pt="1.4rem" spacing="20px">

      <HStack color="#4F4F4F" spacing="10px">
        <Image src="image.png" w="40px" h="40px" />
        <Text>Atlassian </Text>
        <Button h="28px" w="67px" boxShadow="0px 4px 4px 0px #00000040">Follow</Button>
      </HStack>

      <HStack spacing="6rem" mt="1.4rem">

        <VStack color="black" display="flex" alignItems="flex-start" textAlign="left" justifyContent="left">
          {companyInfo.map((item, index) => (
            <Box key={index} spacing="12px">
              <Text color="#6E6D6D">{item.title}</Text>
              <Text>{item.value}</Text>
            </Box>
          ))}
        </VStack>

        <VStack color="black" display="flex" alignItems="flex-start" textAlign="left" justifyContent="left">
          {companyInfo1.map((item, index) => (
            <Box key={index}>
              <Text color="#6E6D6D">{item.title}</Text>
              <Text>{item.value}</Text>
            </Box>
          ))}
        </VStack>

       
      </HStack>
      <Box mt="1.4rem">
        <Text textAlign="left"  textDecoration="underline" color=" rgba(176, 176, 176, 1)
">Report this listing</Text>
      </Box>
     
    </Box>
  );
}
