import React from 'react';
import { Box, HStack, Text, VStack, Button } from '@chakra-ui/react';
import Skills from './Skills';
import AboutJob from './AboutJob';
import Footer from './Footer';

export default function Home() {

  const locations = [
    {
      id: 1,
      name: 'Delaware, USA',
      svg: (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13.5302C13.6569 13.5302 15 12.187 15 10.5302C15 8.8733 13.6569 7.53015 12 7.53015C10.3431 7.53015 9 8.8733 9 10.5302C9 12.187 10.3431 13.5302 12 13.5302Z" stroke="#5D5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22.5302C16 18.5302 20 14.9484 20 10.5302C20 6.11187 16.4183 2.53015 12 2.53015C7.58172 2.53015 4 6.11187 4 10.5302C4 14.9484 8 18.5302 12 22.5302Z" stroke="#5D5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      name: '$300k-$400k',
      svg: (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.53015C12 4.63472 9.53757 5.53015 6.5 5.53015C3.46243 5.53015 1 4.63472 1 3.53015M12 3.53015C12 2.42558 9.53757 1.53015 6.5 1.53015C3.46243 1.53015 1 2.42558 1 3.53015M12 3.53015V5.03015M1 3.53015V15.5302C1 16.6347 3.46243 17.5302 6.5 17.5302M6.5 9.53015C6.33145 9.53015 6.16468 9.52739 6 9.522C3.19675 9.43014 1 8.57343 1 7.53015M6.5 13.5302C3.46243 13.5302 1 12.6347 1 11.5302M21 10.0302C21 11.1347 18.5376 12.0302 15.5 12.0302C12.4624 12.0302 10 11.1347 10 10.0302M21 10.0302C21 8.92558 18.5376 8.03015 15.5 8.03015C12.4624 8.03015 10 8.92558 10 10.0302M21 10.0302V17.5302C21 18.6347 18.5376 19.5302 15.5 19.5302C12.4624 19.5302 10 18.6347 10 17.5302V10.0302M21 13.7802C21 14.8847 18.5376 15.7802 15.5 15.7802C12.4624 15.7802 10 14.8847 10 13.7802" stroke="#5D5D5D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      ),
    },


  ];
  return (
    <>
      <VStack fontFamily="" spacing="0">
        <Box display="flex" flexDirection="column" paddingLeft="6rem" w="100%" pt="1.4rem" pb="1.4rem" gap="24px" border="1px solid #E7E7E7">

          <HStack spacing="20px" >
            <Box>
              <Text fontSize="36px" fontWeight="700">Senior Product Designer</Text>
            </Box>
            <Box>
              <Text fontSize="14px" color="#888888" fontWeight="400" > • posted 2 days ago</Text>
            </Box>
            <Box>
              <Button border=" 1px solid var(--Component-colors-Utility-Success-utility-success-200, rgba(171, 239, 198, 1))" borderRadius="50px" color="green" 
><Text mr="7px" fontSize="26px" fontWeight="400" >•</Text>Open</Button>
            </Box>
          </HStack>
          <HStack>
            {locations.map((location, index) => (
              <Box key={location.id}>
                <HStack color="#5D5D5D" spacing="12px">
                  {location.svg}
                  <Text fontSize="20px" >{location.name}</Text>
                  {index !== locations.length - 1 && <Text> • </Text>}
                </HStack>
              </Box>
            ))}
          </HStack>


        </Box>
        <Skills />
        <AboutJob />
        <Footer/>

      </VStack>

    </>
  );
}
