import React from "react";

import {Avatar, chakra, Flex, HStack, useColorModeValue, useDisclosure, VisuallyHidden,} from "@chakra-ui/react";

const Header = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return(
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <chakra.a
                            href="/"
                            title="payFlow"
                            display="flex"
                            alignItems="center"
                        >
                            {/*<image></image>*/}
                            <VisuallyHidden>Choc</VisuallyHidden>
                        </chakra.a>


                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center">

                        <Avatar
                            size="sm"
                            name="Admin User"
                            src="https://bit.ly/dan-abramov"
                        />
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Header
