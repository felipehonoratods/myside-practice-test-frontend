import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import ClientProvider from './hooks/ClientProvider';

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
        <ClientProvider>
          <Header />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
