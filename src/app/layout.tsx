import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Go India Stocks Project",
  description: "Frontend development interview question",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
