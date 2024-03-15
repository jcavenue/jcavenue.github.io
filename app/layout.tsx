import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./globals.css";
import NavigationBar from "@/components/NavigationBar";


export const metadata: Metadata = {
  title: "Jcavenue",
  authors: [{name: "John Carlo Fababeir"}],
  description: "Reactive Pawn Personal Web Portfolio made using NextJS",
  keywords: ['Frontend Developer Portfolio', 'Portfolio', 'NextJS', 'Jcavenue', 'Personal Portfolio']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AntdRegistry>
          <NavigationBar/>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
