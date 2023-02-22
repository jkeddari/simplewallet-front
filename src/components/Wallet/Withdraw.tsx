import React, { useState } from 'react'
import { Text, Input, Button, VStack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'
import { FaWallet, FaEthereum } from 'react-icons/fa'
import Contract from '../../../../core/artifacts/contracts/Wallet.sol/Wallet.json'

export default function Withdraw(prop: { address: `0x${string}` }) {
    const [amount, setAmount] = useState('')
    const [address, setAddress] = useState('')
    const { data: signer } = useSigner()

    const withdraw = async () => {
        const contract = new ethers.Contract(prop.address, Contract.abi, signer as ethers.Signer)
        try {
            const transaction = await contract.withdraw(address, ethers.utils.parseEther(amount.toString()))
            await transaction.wait(1)
        } catch (error) {
            console.log(error)
        }
        setAmount('')
        setAddress('')
    }

    return (
        <VStack spacing={3} width={'full'}>
            <Text fontSize={'2xl'} align="center">
                Withraw
            </Text>
            <InputGroup>
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                    <FaWallet />
                </InputLeftElement>
                <Input
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    value={address}
                />
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

            <Button type="submit" onClick={() => withdraw()}>
                Withraw
            </Button>
        </VStack>
    )
}
