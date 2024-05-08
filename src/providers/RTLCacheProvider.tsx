"use client"

import { ReactNode } from "react"

import { prefixer } from "stylis"
import rtlPlugin from "stylis-plugin-rtl"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"

// Create rtl cache
const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
})

function RTLCacheProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

export default RTLCacheProvider
