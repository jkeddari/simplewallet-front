import type { AppProps } from 'next/app'
import React from 'react'

import { ChakraBaseProvider, theme } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { localhost, hardhat } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains([localhost, hardhat], [publicProvider()])

const { connectors } = getDefaultWallets({
    appName: 'Wallet',
    chains,
})

const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraBaseProvider theme={theme}>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </ChakraBaseProvider>
    )
}
