"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [base],
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    appName: "LikeIt",
    appDescription:
      "LikeIt is a decentralized social platform that combines image-style content sharing with NFTs and tokens. Posts are minted as NFTs, likes are represented by tokens, and both creators and collectors earn from engagement and resale",
    appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
