import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advanced 3D Water Login",
  description: "Advanced animated 3D water glass login page",
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
