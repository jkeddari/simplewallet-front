import React from 'react'
import { useAccount } from 'wagmi'
import { Alert, AlertIcon, Flex, HStack, VStack, StackDivider } from '@chakra-ui/react'
import Balance from '@/components/Wallet/Balance'
import Withdraw from '@/components/Wallet/Withdraw'
import Deposit from '@/components/Wallet/Deposit'
import History from '@/components/Wallet/History'
const contractAddress = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'

const Main = () => {
    const { isConnected } = useAccount()

    return (
        <Flex p="2rem" justifyContent="center" alignItems="center">
            {isConnected ? (
                <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} width={'full'}>
                    <Balance address={contractAddress} />
                    <HStack divider={<StackDivider borderColor="gray.200" />} spacing={4} width={'60%'}>
                        <Deposit address={contractAddress} />
                        <Withdraw address={contractAddress} />
                    </HStack>
                    <History address={contractAddress} />
                </VStack>
            ) : (
                <Alert status="warning">
                    <AlertIcon />
                    Please connect your Wallet
                </Alert>
            )}
        </Flex>
    )
}

export default Main
