import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/app/components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop website ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Menu />
        {/* <nav>
          <ul>
            <li>О нас</li>
            <li>Категории</li>
            <li>Товары</li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
