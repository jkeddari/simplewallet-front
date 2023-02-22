import React from 'react'
import { Table, Thead, Tbody, Tr, Th, TableContainer, Stack, Text } from '@chakra-ui/react'
import TransactionHistory from '@/components/Wallet/TransactionHistory'
import { useContractRead } from 'wagmi'
import Contract from '../../../../core/artifacts/contracts/Wallet.sol/Wallet.json'
import { ethers } from 'ethers'

export default function History(prop: { address: `0x${string}` }) {
    interface Transaction {
        id: ethers.BigNumber
        from: `0x${string}`
        to: `0x${string}`
        amount: ethers.BigNumber
        date: ethers.BigNumber
    }

    const { data, isError } = useContractRead({
        address: prop.address,
        abi: Contract.abi,
        functionName: 'getTransactions',
        watch: true,
    })

    return (
        <Stack alignItems="center" direction={'column'} w={'100%'}>
            <Text fontSize={'3xl'}>Transactions History</Text>
            {isError ? (
                <Text>Error loading history</Text>
            ) : (
                <TableContainer w={'100%'}>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>From</Th>
                                <Th>To</Th>
                                <Th>Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {(data as Transaction[]).map((tx) => {
                                return (
                                    <TransactionHistory
                                        key={tx.id.toNumber()}
                                        from={tx.from}
                                        to={tx.to}
                                        amount={ethers.utils.formatEther(tx.amount)}
                                        date={new Date(tx.date.toNumber() * 1000).toUTCString()}
                                        symbole="ETH"
                                    />
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}
        </Stack>
    )
}
