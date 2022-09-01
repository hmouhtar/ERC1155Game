import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard/Dashboard";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount } from "wagmi";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import Home from "./views/Home/Home";

interface AppProps {}

const App: FC<AppProps> = () => {
  const { status: walletStatus } = useAccount();

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <GuardedRoute
              redirectPath="/"
              isAllowed={walletStatus == "connected"}
            >
              <Dashboard />
            </GuardedRoute>
          }
        />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
