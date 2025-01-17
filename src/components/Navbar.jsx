import React from 'react';
import { Box, HStack, Link, Text, Image } from '@chakra-ui/react';

const navItems = [
    {
        href: "#messages",
        label: "Messages",
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.04475C3 6.36459 3 5.52451 3.32698 4.88278C3.6146 4.31829 4.07354 3.85935 4.63803 3.57173C5.27976 3.24475 6.11984 3.24475 7.8 3.24475H16.2C17.8802 3.24475 18.7202 3.24475 19.362 3.57173C19.9265 3.85935 20.3854 4.31829 20.673 4.88278C21 5.52451 21 6.36459 21 8.04475V13.4448C21 15.1249 21 15.965 20.673 16.6067C20.3854 17.1712 19.9265 17.6302 19.362 17.9178C18.7202 18.2448 17.8802 18.2448 16.2 18.2448H9.68375C9.0597 18.2448 8.74767 18.2448 8.44921 18.306C8.18443 18.3603 7.9282 18.4502 7.68749 18.5732C7.41617 18.7118 7.17252 18.9067 6.68521 19.2966L4.29976 21.2049C3.88367 21.5378 3.67563 21.7043 3.50054 21.7044C3.34827 21.7046 3.20422 21.6354 3.10923 21.5164C3 21.3795 3 21.1131 3 20.5803V8.04475Z" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        hasNotification: true
    },
    {
        href: "#paymnets",
        label: "Payments",
        icon: (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5295 8.59661C12.9571 9.0047 12.2566 9.24475 11.5 9.24475C9.567 9.24475 8 7.67775 8 5.74475C8 3.81175 9.567 2.24475 11.5 2.24475C12.753 2.24475 13.8522 2.90317 14.4705 3.89289M6 20.3319H8.61029C8.95063 20.3319 9.28888 20.3724 9.61881 20.4534L12.3769 21.1236C12.9753 21.2694 13.5988 21.2836 14.2035 21.1662L17.253 20.5729C18.0585 20.4159 18.7996 20.0302 19.3803 19.4653L21.5379 17.3665C22.154 16.7681 22.154 15.7972 21.5379 15.1978C20.9832 14.6582 20.1047 14.5974 19.4771 15.0551L16.9626 16.8896C16.6025 17.1528 16.1643 17.2946 15.7137 17.2946H13.2855L14.8311 17.2945C15.7022 17.2945 16.4079 16.6081 16.4079 15.7607V15.4539C16.4079 14.7503 15.9156 14.1367 15.2141 13.9666L12.8286 13.3865C12.4404 13.2923 12.0428 13.2448 11.6431 13.2448C10.6783 13.2448 8.93189 14.0436 8.93189 14.0436L6 15.2696M20 6.74475C20 8.67775 18.433 10.2448 16.5 10.2448C14.567 10.2448 13 8.67775 13 6.74475C13 4.81175 14.567 3.24475 16.5 3.24475C18.433 3.24475 20 4.81175 20 6.74475ZM2 14.8448L2 20.6448C2 21.2048 2 21.4848 2.10899 21.6987C2.20487 21.8869 2.35785 22.0399 2.54601 22.1358C2.75992 22.2447 3.03995 22.2448 3.6 22.2448H4.4C4.96005 22.2448 5.24008 22.2448 5.45399 22.1358C5.64215 22.0399 5.79513 21.8869 5.89101 21.6987C6 21.4848 6 21.2048 6 20.6448V14.8448C6 14.2847 6 14.0047 5.89101 13.7908C5.79513 13.6026 5.64215 13.4496 5.45399 13.3537C5.24008 13.2448 4.96005 13.2448 4.4 13.2448L3.6 13.2448C3.03995 13.2448 2.75992 13.2448 2.54601 13.3537C2.35785 13.4496 2.20487 13.6026 2.10899 13.7908C2 14.0047 2 14.2847 2 14.8448Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    },
    {
        href: "#applications",
        label: "Applications",
        icon: (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 21.2448V19.2448C22.5 17.3809 21.2252 15.8148 19.5 15.3708M16 3.53551C17.4659 4.1289 18.5 5.56606 18.5 7.24475C18.5 8.92344 17.4659 10.3606 16 10.954M17.5 21.2448C17.5 19.381 17.5 18.4491 17.1955 17.714C16.7895 16.7339 16.0108 15.9552 15.0307 15.5492C14.2956 15.2448 13.3638 15.2448 11.5 15.2448H8.5C6.63623 15.2448 5.70435 15.2448 4.96927 15.5492C3.98915 15.9552 3.21046 16.7339 2.80448 17.714C2.5 18.4491 2.5 19.381 2.5 21.2448M14 7.24475C14 9.45389 12.2091 11.2448 10 11.2448C7.79086 11.2448 6 9.45389 6 7.24475C6 5.03561 7.79086 3.24475 10 3.24475C12.2091 3.24475 14 5.03561 14 7.24475Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        )
    }
];

export default function Navbar() {
    return (

        <HStack fontFamily="
Poppins" spacing={8} display="flex" boxShadow=" 0px 4px 4px 0px rgba(217, 217, 217, 0.1)" flexDirection="row" alignItems="center" p={["16px", "32px"]} h={["80px", "100px"]} justifyContent="space-between">

            <Box
                width={["90px", "100px"]}
                height={["35px", "65px"]}
                bgColor='#E7E7E7'
                display='flex'
                alignItems='center'
                justifyContent='center'
                p={["24px", "6px"]}
            >
                <Text color='#DC4A2D' fontSize={['16px', '20px']} fontWeight={['500', '700']}>
                    Logo
                </Text>
            </Box>

            <Box display="flex" flexDirection="row" alignItems='center' >
                <Box marginRight="12px" bgColor="#DC4A2D" display="flex" alignItems="center" justifyContent="center"  boxShadow=" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" border=" 2px solid rgba(252, 180, 165, 1)" borderRadius="49px" w="109px" h="58px" >
                    <Link  >
                        <HStack color="white" >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 21.2448V7.24475C8 6.31478 8 5.84979 8.10222 5.46829C8.37962 4.43302 9.18827 3.62437 10.2235 3.34697C10.605 3.24475 11.07 3.24475 12 3.24475C12.93 3.24475 13.395 3.24475 13.7765 3.34697C14.8117 3.62437 15.6204 4.43302 15.8978 5.46829C16 5.84979 16 6.31478 16 7.24475V21.2448M5.2 21.2448H18.8C19.9201 21.2448 20.4802 21.2448 20.908 21.0268C21.2843 20.835 21.5903 20.5291 21.782 20.1527C22 19.7249 22 19.1649 22 18.0448V10.4448C22 9.32465 22 8.76459 21.782 8.33677C21.5903 7.96045 21.2843 7.65448 20.908 7.46274C20.4802 7.24475 19.9201 7.24475 18.8 7.24475H5.2C4.07989 7.24475 3.51984 7.24475 3.09202 7.46274C2.71569 7.65448 2.40973 7.96045 2.21799 8.33677C2 8.76459 2 9.32465 2 10.4448V18.0448C2 19.1649 2 19.7249 2.21799 20.1527C2.40973 20.5291 2.71569 20.835 3.09202 21.0268C3.51984 21.2448 4.0799 21.2448 5.2 21.2448Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <Text fontSize="16px" >Jobs</Text>
                        </HStack>
                    </Link>
                </Box>
                <HStack spacing="8" p="16px" border=" 0.5px solid #D1D1D1" w="100%" h="64px" borderRadius="50px" boxShadow=" 0px 4px 4px 0px #00000040 inset
">
                    {navItems.map((item, index) => (
                        <Link key={item.id} href={item.href} display="flex" alignItems="center" color="gray.500" position="relative" _hover={{ color: 'gray.700' }}>
                            {item.icon}
                            {item.hasNotification && (
                                <Box position="absolute" top="-2px" right="87px" w="6px" h="6px" bgColor="red.500" borderRadius="50%"></Box>
                            )}
                            <Text ml="2" fontWeight="medium">{item.label}</Text>

                        </Link>
                    ))}
                </HStack>
            </Box>
            <Box display="flex" flexDirection="row" alignItems='center' >
                <Box marginRight="12px" p="0.7rem" borderRadius="36px" >

                    <HStack fontSize="24px" color="white" spacing='18px' >
                        <Box>
                            <svg width="22" height="24" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6666 26.5723H10.3333M20.9999 9.23895C20.9999 7.11722 20.1571 5.08239 18.6568 3.5821C17.1565 2.08181 15.1217 1.23895 12.9999 1.23895C10.8782 1.23895 8.84338 2.08181 7.34309 3.5821C5.8428 5.08239 4.99994 7.11722 4.99994 9.23895C4.99994 13.3592 3.96057 16.1802 2.7995 18.0462C1.82011 19.6201 1.33042 20.4071 1.34838 20.6266C1.36826 20.8697 1.41976 20.9624 1.61564 21.1077C1.79256 21.239 2.59006 21.239 4.18508 21.239H21.8148C23.4098 21.239 24.2073 21.239 24.3842 21.1077C24.5801 20.9624 24.6316 20.8697 24.6515 20.6266C24.6695 20.4071 24.1798 19.6201 23.2004 18.0462C22.0393 16.1802 20.9999 13.3592 20.9999 9.23895Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <Box position="absolute" top="35px" right="144px" w="6px" h="6px" bgColor="red.500" borderRadius="50%"></Box>
                        </Box>
                        <Image borderRadius="50px" src="image.png " w="40px" h="40px"></Image>
                        <Box>

                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.07227L6 6.07227L11 1.07227" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Box>


                    </HStack>

                </Box>
            </Box>

        </HStack>

    );
}
