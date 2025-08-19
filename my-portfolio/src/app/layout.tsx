import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Torres",
  description: "Hi! This is my personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={figtree.className}
      >
        {children}
      </body>
    </html>
  );
}
