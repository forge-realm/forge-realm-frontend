import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import { PushChainProviders } from "./providers/pushchain";
import ReduxProvider from "./providers/redux-toolkit";
import ThemeProvider from "./providers/theme";

// Remove `import { Metadata } from "next";`
// Remove explicit type on `metadata` export, just let Next.js infer the type.

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Optional: export these to re-use font classNames elsewhere, if needed.
export { inter, raleway };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${inter.className} antialiased`}
      >
        <ReduxProvider>
          <PushChainProviders>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </PushChainProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
