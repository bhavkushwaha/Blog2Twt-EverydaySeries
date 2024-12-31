import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Blog to Tweet Converter',
  description: 'Convert blog posts to tweets effortlessly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignInUrl="/dashboard"
    afterSignUpUrl="/dashboard"
    afterSignOutUrl="/">
    <html lang="en">
      <body 
         className={inter.className}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
