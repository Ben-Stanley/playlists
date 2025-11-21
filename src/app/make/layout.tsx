import type { Metadata } from "next";
import "@/assets/globals.css";
import AppHeader from "@/components/Organisms/AppHeader";

export const metadata: Metadata = {
  title: "Playlist Maker",
  description: "Built by me, for me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />

        {children}
      </body>
    </html>
  );
}