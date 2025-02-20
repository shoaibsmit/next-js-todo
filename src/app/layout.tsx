import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
// import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
