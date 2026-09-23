import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMAP",
  description: "La carte interactive du sport.",
  icons: {
    icon: "/assets/logos/marks/mark-white-1.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
