import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { Web3Provider } from "@/components/providers/web3-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navigation } from "@/components/navigation";
import { TokenButton } from "@/components/token-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Web3Provider>
              <Navbar />
              {children}
              <TokenButton />
              <Navigation />
            </Web3Provider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
