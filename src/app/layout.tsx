import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Learning Next.js 15 step by step",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-teal-700 text-white">My App Navbar</header>
        <main className="p-4">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2025 My App
        </footer>
      </body>
    </html>
  );
}
