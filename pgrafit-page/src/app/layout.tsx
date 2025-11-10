import type { Metadata } from "next";
import { Inter, Smooch_Sans } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Variável CSS para usar no Tailwind
});

const smoochSans = Smooch_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-smooch-sans', // Variável CSS para usar no Tailwind
});

export const metadata: Metadata = {
  title: "P-Grafit",
  description: "Made By",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${smoochSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
