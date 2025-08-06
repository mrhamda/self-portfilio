import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome'
import { ContextProvider } from "@/contexts/context"; // make sure the path is correct!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah AH",
  description: "A portfilio about a young fullstack webdevloper",
};

export default function RootLayout({ children }) {


  return (
    <ContextProvider>

      <html lang="en">

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          {children}
        </body>

        <head>
          <meta name="color-scheme" content="light" />
        </head>

      </html >
    </ContextProvider>

  );
}
