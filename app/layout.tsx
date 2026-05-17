import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Water Login",
  description: "3D water click feeling login page design",
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
