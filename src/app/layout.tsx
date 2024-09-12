import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "MySide Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
