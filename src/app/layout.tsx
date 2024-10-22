'use client';

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { checkSetTheme } from "@/operations/common";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [is_min_width, setIs_min_width] = useState(true);

  useEffect(() => {
    setIs_min_width(window.innerWidth >= 768);
  }, [])
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-black dark:text-white`}>
        {is_min_width ? 
          <ThemeProvider attribute="class" defaultTheme={checkSetTheme() || "light"} >{children}</ThemeProvider>
        : 
          <h1 className="m-4 text-center">{"OOPS!\nUnfortunately, the dashboard doesn't support mobile screens."}</h1>
        }
      </body>
    </html>
  );
}
