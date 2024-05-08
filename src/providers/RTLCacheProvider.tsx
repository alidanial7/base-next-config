"use client"

import React, { ReactNode } from "react"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"

// Create rtl cache
const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
})

function RTLCacheProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

export default RTLCacheProvider
