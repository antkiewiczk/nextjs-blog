import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@/app/components/container/container";
import Footer from "@/app/components/footer/footer";
import HeaderContainer from "@/app/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wasyl blog",
  description: "Wasyl's blog based on nextjs v14.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid [grid-template-areas:'aside_aside''main_main''footer_footer'] md:[grid-template-areas:'aside_main''aside_main''footer_footer']`}
      >
        <HeaderContainer />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
