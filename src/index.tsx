import "./index.css";
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard/Dashboard";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  chain,
  Chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount } from "wagmi";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import { Home } from "@mui/icons-material";
import App from "./App";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const hardhatChain: Chain = {
  id: 31337,
  name: "Hardhat",
  network: "Hardhat",
  rpcUrls: {
    default: "http://127.0.0.1:8545/",
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [chain.polygon, hardhatChain],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== hardhatChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <App></App>
      </RainbowKitProvider>
    </WagmiConfig>
  </BrowserRouter>
);
