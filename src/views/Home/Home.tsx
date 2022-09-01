import React, { FC } from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import { useAccount } from "wagmi";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { status: walletStatus } = useAccount();

  if (walletStatus === "connected") {
    return <Navigate to="/dashboard" replace />;
  }

  return <div></div>;
};

export default Home;
