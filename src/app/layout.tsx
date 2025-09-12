import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHEEN PREZZO",
  description: "The official website of SHEEN PREZZO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}