import { useBalance } from 'wagmi'
import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Balance(prop: { address: `0x${string}` }) {
    const { data, isError, isLoading } = useBalance({
        address: prop.address,
        chainId: 1337,
        watch: true,
        formatUnits: 'ether',
    })

    const getBalance = () => {
        if (isLoading) return <Text>Fetching balance…</Text>
        if (isError) return <Text>Error fetching balance</Text>
        return (
            <Text fontSize={'3xl'}>
                Balance: {data?.formatted} {data?.symbol}
            </Text>
        )
    }

    return <div>{getBalance()}</div>
}
