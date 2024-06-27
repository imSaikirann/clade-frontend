import React from 'react';
import {  HStack, Text, VStack, Image } from '@chakra-ui/react';

const skillsData = [
  { id: 1, name: 'Figma', imageSrc: 'figma.png' },
  { id: 2, name: 'Adobe Illustrator', imageSrc: 'ai.png' },
  { id: 3, name: 'Adobe XD', imageSrc: 'xd.png' },
];

const req = [
  { id: 1, name: 'Preferred Language', skills: 'English' },
  { id: 2, name: 'Type', skills: 'English' },
  { id: 3, name: 'Years of Experience', skills: '3+ Years of Experience' },
];

export default function Skills() {
  return (
    <HStack fontFamily="
Poppins" spacing="32" w="100%" paddingLeft="6rem" pt="1.4rem" pb="1.4rem" border="1px solid #D9D9D9">
      {/* Skills Required Section */}
      <VStack  alignItems="flex-start" spacing="4">
        <Text fontSize="14px" color="#6E6D6D">Skills Required</Text>
        <VStack align="stretch" spacing="2">
          {skillsData.map((skill) => (
            <HStack key={skill.id} spacing="2">
              <Image boxSize="16px" src={skill.imageSrc} alt={skill.name} />
              <Text fontSize="14px">{skill.name}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>


   
      <HStack  alignItems="flex-start" spacing="4">
       
        <HStack align="stretch" spacing="32" alignItems="flex-start">
          {req.map((requirement) => (
           <VStack alignItems="flex-start" pb="3.8rem">
  <Text  fontSize="14px" color="#6E6D6D" key={requirement.id}>{`${requirement.name}`}</Text>
  <Text key={requirement.id}>{`${requirement.skills}`}</Text>
           </VStack>
          
          ))}
        </HStack>
      </HStack>
    </HStack>
  );
}
