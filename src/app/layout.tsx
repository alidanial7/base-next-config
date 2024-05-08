import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"

import CustomThemeProvider from "@/providers/CustomThemeProvider"
import RTLCacheProvider from "@/providers/RTLCacheProvider"

import "./globals.css"

/* -------------------------------------------------------------------------- */
/*                                  Meta Data                                 */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  icons: { apple: "/favicon.ico" },
  title: process.env.NEXT_PUBLIC_APP_TITLE,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

/* -------------------------------------------------------------------------- */
/*                                 Local Font                                 */
/* -------------------------------------------------------------------------- */

const Vazirmatn = localFont({
  src: [
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-Regular.woff2",
      weight: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-FD-Bold.woff2",
      weight: "bold",
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html dir="rtl" lang="fa">
      <RTLCacheProvider>
        <CustomThemeProvider>
          <body className={Vazirmatn.className}>{children}</body>
        </CustomThemeProvider>
      </RTLCacheProvider>
    </html>
  )
}
