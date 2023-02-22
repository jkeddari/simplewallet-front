import React from 'react'
import { Flex, Text, useColorModeValue, HStack, IconButton, StackDivider, useColorMode } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
const Header = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <Flex
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('gray.300', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.400', 'gray.700')}
            justifyContent={'space-between'}
        >
            <Text fontSize="5xl" fontFamily="monospace" fontWeight="bold">
                Wallet
            </Text>
            <HStack spacing={3} divider={<StackDivider borderColor="gray.200" />}>
                <IconButton
                    aria-label="toggle theme"
                    onClick={toggleColorMode}
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                />
                <ConnectButton />
            </HStack>
        </Flex>
    )
}

export default Header
