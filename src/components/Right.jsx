import { Box, Button, HStack, VStack, Text,  Image } from '@chakra-ui/react';
import React from 'react';

export default function Right() {
    const applicants = [
        {
            svg: (
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3334 16.0302V14.3635C18.3334 12.8103 17.271 11.5052 15.8334 11.1352M12.9167 1.27245C14.1383 1.76694 15 2.96458 15 4.36348C15 5.76239 14.1383 6.96003 12.9167 7.45452M14.1667 16.0302C14.1667 14.477 14.1667 13.7004 13.913 13.0879C13.5746 12.2711 12.9257 11.6222 12.109 11.2839C11.4964 11.0302 10.7198 11.0302 9.16669 11.0302H6.66669C5.11355 11.0302 4.33698 11.0302 3.72441 11.2839C2.90765 11.6222 2.25874 12.2711 1.92042 13.0879C1.66669 13.7004 1.66669 14.477 1.66669 16.0302M11.25 4.36348C11.25 6.20443 9.75764 7.69682 7.91669 7.69682C6.07574 7.69682 4.58335 6.20443 4.58335 4.36348C4.58335 2.52254 6.07574 1.03015 7.91669 1.03015C9.75764 1.03015 11.25 2.52254 11.25 4.36348Z" stroke="#4F4F4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            name: 'Applicants',
            count: 400
        },
        {
            svg: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13.4468H6.25002C5.08705 13.4468 4.50557 13.4468 4.0324 13.5904C2.96707 13.9135 2.13339 14.7472 1.81022 15.8125C1.66669 16.2857 1.66669 16.8672 1.66669 18.0302M13.3334 15.5302L15 17.1968L18.3334 13.8635M12.0834 6.78015C12.0834 8.85122 10.4044 10.5302 8.33335 10.5302C6.26229 10.5302 4.58335 8.85122 4.58335 6.78015C4.58335 4.70908 6.26229 3.03015 8.33335 3.03015C10.4044 3.03015 12.0834 4.70908 12.0834 6.78015Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            name: 'Matches',
            count: 100
        },
        {
            svg: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.03015C2.5 5.63002 2.5 4.92995 2.77248 4.39518C3.01217 3.92477 3.39462 3.54232 3.86502 3.30264C4.3998 3.03015 5.09987 3.03015 6.5 3.03015H13.5C14.9001 3.03015 15.6002 3.03015 16.135 3.30264C16.6054 3.54232 16.9878 3.92477 17.2275 4.39518C17.5 4.92995 17.5 5.63002 17.5 7.03015V11.5302C17.5 12.9303 17.5 13.6303 17.2275 14.1651C16.9878 14.6355 16.6054 15.018 16.135 15.2577C15.6002 15.5302 14.9001 15.5302 13.5 15.5302H8.06979C7.54975 15.5302 7.28972 15.5302 7.04101 15.5812C6.82036 15.6265 6.60683 15.7014 6.40624 15.8039C6.18014 15.9194 5.9771 16.0818 5.57101 16.4067L3.58313 17.997C3.23639 18.2744 3.06302 18.4131 2.91712 18.4132C2.79022 18.4134 2.67019 18.3557 2.59102 18.2565C2.5 18.1425 2.5 17.9204 2.5 17.4764V7.03015Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            name: 'Messages',
            count: 147
        },
        {
            svg: (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01677 11.1245C1.90328 10.9448 1.84654 10.8549 1.81477 10.7163C1.79091 10.6122 1.79091 10.4481 1.81477 10.344C1.84654 10.2054 1.90328 10.1155 2.01677 9.93584C2.95461 8.45086 5.74617 4.69682 10.0003 4.69682C14.2545 4.69682 17.0461 8.45086 17.9839 9.93584C18.0974 10.1155 18.1541 10.2054 18.1859 10.344C18.2098 10.4481 18.2098 10.6122 18.1859 10.7163C18.1541 10.8549 18.0974 10.9448 17.9839 11.1245C17.0461 12.6095 14.2545 16.3635 10.0003 16.3635C5.74617 16.3635 2.95461 12.6095 2.01677 11.1245Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.0003 13.0302C11.381 13.0302 12.5003 11.9109 12.5003 10.5302C12.5003 9.14944 11.381 8.03016 10.0003 8.03016C8.61962 8.03016 7.50034 9.14944 7.50034 10.5302C7.50034 11.9109 8.61962 13.0302 10.0003 13.0302Z" stroke="#4F4F4F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            ),
            name: 'Views',
            count: 800
        },
    ];

    return (
        <Box>
            <VStack bgColor="#FCFCFC" border="1px, 1px, 0px, 0px solid #E7E7E7" p="1.4rem" h="100%">
                <HStack>
                    <Button variant='outline' border="0.8px solid #DC4A2D" w="172px" h="48px" bgColor="#FEF4F2" color="#DC4A2D" gap="5px">
                        <Text>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.03015H13M3 5.53015H18M16.3333 5.53015L15.7489 14.2962C15.6612 15.6114 15.6174 16.269 15.3333 16.7677C15.0833 17.2066 14.706 17.5596 14.2514 17.7799C13.735 18.0302 13.0759 18.0302 11.7578 18.0302H9.24221C7.92409 18.0302 7.26503 18.0302 6.74861 17.7799C6.29396 17.5596 5.91674 17.2066 5.66665 16.7677C5.38259 16.269 5.33875 15.6114 5.25107 14.2962L4.66667 5.53015M8.83333 9.28015V13.4468M12.1667 9.28015V13.4468" stroke="#DC4A2D" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Text>
                        Delete job
                    </Button>

                    <Button border="2px solid #DC4A2D" w="172px" h="48px" bgColor="#DC4A2D" color="#FFFFFF" gap="5px">
                        <Text>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 6.19683L8.83331 3.53016M1.16663 13.8635L3.42287 13.6128C3.69853 13.5822 3.83636 13.5669 3.96519 13.5252C4.07949 13.4882 4.18826 13.4359 4.28855 13.3697C4.4016 13.2952 4.49966 13.1971 4.69578 13.001L13.5 4.19683C14.2364 3.46045 14.2364 2.26654 13.5 1.53016C12.7636 0.79378 11.5697 0.79378 10.8333 1.53016L2.02911 10.3343C1.83299 10.5305 1.73493 10.6285 1.66038 10.7416C1.59425 10.8419 1.54197 10.9506 1.50497 11.0649C1.46326 11.1938 1.44795 11.3316 1.41732 11.6073L1.16663 13.8635Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Text>
                        Edit job
                    </Button>
                </HStack>

                <VStack spacing={4} w="100%">
                    {applicants.map((applicant, index) => (
                        <>
                            <Box
                                key={index}
                                w="100%"
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="space-between"
                                p="0.5rem"
                                borderColor="#E7E7E7"

                            >
                                <HStack spacing={4}>
                                    {applicant.svg}
                                    <Text>{applicant.name}</Text>
                                </HStack>
                                <Text>{applicant.count}</Text>

                            </Box>
                            {index < applicants.length - 1 && (
                                <Box w="100%" h="2px" bg="#E7E7E7" />
                            )}
                        </>
                    ))}
                </VStack>

                <Box
                    w="385px"
                    h="196px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="#FFFFFF"
                    border="1px solid #F7F7F7"
                    borderRadius="12px"
                    boxShadow="-4px 8px 20px 0px #0000001A"
                  
                >
                    <VStack spacing="18px" alignItems="flex-start"   >
                        <Text fontSize="20px" color="black" fontWeight="500">
                            “A quote from an Atlassian.”
                        </Text>
                        <HStack alignItems="flex-start" justifyContent="flex-start">
                            <Box>
                                <Image w="45px" h="45px" borderRadius="50px" src="boy.png" />
                            </Box>
                            <Box textAlign="left" color="black">
                                <Text>Name</Text>
                                <Text color="#828282">Description</Text>
                            </Box>
                        </HStack>
                    </VStack>
                </Box>

            </VStack>
        </Box>
    );
}
