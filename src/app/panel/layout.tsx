import { ReactNode } from "react"

import CustomAppBar from "@/components/CustomAppBar/CustomAppBar"
import CustomBottomNavigation from "@/components/CustomBottomNavigation/CustomBottomNavigation"

function MainLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <CustomAppBar />
      {children}
      <CustomBottomNavigation />
    </div>
  )
}

export default MainLayout
