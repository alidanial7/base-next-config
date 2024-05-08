"use client"

import React, { useMemo } from "react"

import { createTheme } from "@mui/material/styles"
import ThemeProvider from "@mui/material/styles/ThemeProvider"

import ThemeOptions from "@/theme/theme"

function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => createTheme(ThemeOptions), [])
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
