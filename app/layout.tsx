import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagyalaxmi Timber Mart | Wooden Packaging Solutions",
  description: "Export and domestic wooden boxes, pallets, crates, cases, packing materials and on-site packing services from Ankleshwar, Gujarat.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
