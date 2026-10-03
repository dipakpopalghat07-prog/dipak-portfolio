import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipak Datta Popalghat | Software Developer | AI Developer",
  description:
    "Portfolio of Dipak Datta Popalghat - Software Developer, AI Developer and Software Quality-focused engineer.",
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
