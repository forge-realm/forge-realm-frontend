import "./globals.css";
import { PushChainProviders } from "./providers/pushchain";
import ReduxProvider from "./providers/redux-toolkit";
import ThemeProvider from "./providers/theme";
import { raleway, inter } from "@/lib/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
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

// import { Raleway, Inter } from "next/font/google";
// import "./globals.css";
// import { ClientLayout } from "./client-layout";

// const raleway = Raleway({
//   variable: "--font-raleway",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// export { inter, raleway };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${raleway.className} ${inter.className} antialiased`}>
//         <ClientLayout>
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   );
// }