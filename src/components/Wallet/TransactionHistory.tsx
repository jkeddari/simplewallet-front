import React from 'react'
import { Tr, Td } from '@chakra-ui/react'

export default function TransactionHistory(prop: {
    key: number
    from: `0x${string}`
    to: `0x${string}`
    amount: string
    date: string
    symbole: string
}) {
    return (
        <Tr>
            <Td>{prop.date}</Td>
            <Td>{prop.from}</Td>
            <Td>{prop.to}</Td>
            <Td>
                {prop.amount} {prop.symbole}
            </Td>
        </Tr>
    )
}
