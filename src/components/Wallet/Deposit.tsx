import React, { useState } from 'react'
import { Text, Input, Button, VStack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ethers } from 'ethers'
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { useDebounce } from 'use-debounce'
import { FaWallet, FaEthereum } from 'react-icons/fa'

export default function Deposit(prop: { address: `0x${string}` }) {
    const [amount, setAmount] = useState('')

    const [debouncedAmount] = useDebounce(amount, 500)

    const { config } = usePrepareSendTransaction({
        request: {
            to: prop.address,
            value: debouncedAmount ? ethers.utils.parseEther(debouncedAmount) : undefined,
        },
    })

    const { sendTransaction } = useSendTransaction(config)

    return (
        <VStack spacing={3} width={'full'}>
            <Text fontSize={'2xl'} align="center">
                Deposit
            </Text>

            <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                    <FaWallet />
                </InputLeftElement>
                <Input isDisabled={true} value={prop.address} />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                    <FaEthereum />
                </InputLeftElement>
                <Input
                    id="amount"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    placeholder="Enter amount"
                />
            </InputGroup>

            <Button
                type="submit"
                onClick={() => {
                    sendTransaction?.()
                    setAmount('')
                }}
            >
                Deposit
            </Button>
        </VStack>
    )
}
