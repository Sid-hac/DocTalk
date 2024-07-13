import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import { Ellipsis, Loader2 } from "lucide-react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocTalk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Provider>
        <html lang="en">
          <body className={inter.className}>
            <ClerkLoading>
              <div className=" flex w-screen h-screen justify-center items-center text-blue-600" >
                <Loader2 className="w-10 h-10 animate-spin" />
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              {children}
            </ClerkLoaded>
            <Toaster position="top-center" />
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
}
