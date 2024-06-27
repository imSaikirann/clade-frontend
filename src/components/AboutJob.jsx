import React from 'react';
import { Box, VStack, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const jobDetails = [
  "Handle the UI/UX research design",
  "Work on researching latest web applications designs & trends",
  "Work on conceptualizing and visualizing",
  "Work on creating graphics content and other graphic related works"
];

const benefits = [
  "Health insurance",
  "Provident Fund"
];

const schedule = [
  "Day shift",
  "Flexible hours",
  "Remote work options"
];

const supplementalPayTypes = [
  "Performance bonus",
  "Yearly bonus"
];

export default function AboutJob() {
  return (
    <VStack fontFamily="
Poppins" w="100%" align="flex-start" spacing="4" pt="1.4rem" pb="1.4rem" pl="6rem" border="1px solid #D9D9D9">
      {/* Job Details */}
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px" fontWeight="400" lineHeight="21px" marginBottom="4px" color="#6E6D6D">About the Job</Text>
        <UnorderedList fontSize="14px" fontWeight="400" lineHeight="21px" listStyleType="none" ml="0" spacing="2">
          {jobDetails.map((detail, index) => (
            <ListItem key={index} display="flex">
              <Text mr="2">{index + 1}.</Text>
              <Text>{detail}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      {/* Benefits */}
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px" fontWeight="400" lineHeight="21px" marginBottom="4px" color="#3D3D3D">Benefits:</Text>
        <UnorderedList styleType="disc" pl="4" fontSize="14px" fontWeight="400" lineHeight="21px">
          {benefits.map((benefit, index) => (
            <ListItem key={index}>
              <Text textAlign='left'>{benefit}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      

      {/* Schedule */}
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px" fontWeight="400" lineHeight="21px" marginBottom="4px" color="#3D3D3D">Schedule:</Text>
        <UnorderedList styleType="disc" pl="4" fontSize="14px" fontWeight="400" lineHeight="21px">
          {schedule.map((item, index) => (
            <ListItem key={index}>
              <Text textAlign='left'>{item}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      {/* Supplemental Pay Types */}
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Text fontSize="14px" fontWeight="400" lineHeight="21px" marginBottom="4px" color="#3D3D3D">Supplemental Pay Types:</Text>
        <UnorderedList styleType="disc" pl="4" fontSize="14px" fontWeight="400" lineHeight="21px">
          {supplementalPayTypes.map((payType, index) => (
            <ListItem key={index}>
              <Text textAlign='left'>{payType}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
}
