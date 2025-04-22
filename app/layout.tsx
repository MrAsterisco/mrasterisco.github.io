import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: "Alessio Moiso | Portfolio",
  description: "Explore the portfolio of Alessio Moiso, showcasing expertise across several domains, including management, apps and web development, infrastructure, and cloud computing.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-[1024px] mx-auto sm:px-0 bg-white dark:bg-black">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
