import type { Metadata } from "next";
import "@/assets/globals.css";

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
        {children}
      </body>
    </html>
  );
}
