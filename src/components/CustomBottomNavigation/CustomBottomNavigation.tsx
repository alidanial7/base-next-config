"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { BottomNavigation, BottomNavigationAction } from "@mui/material"

import bottomNavigationActionList from "./data"

function CustomBottomNavigation() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [value, setValue] = useState(0)

  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */

  const router = useRouter()

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      {bottomNavigationActionList.map(item => (
        <BottomNavigationAction
          icon={item.icon}
          key={item.id}
          label={item.label}
          onClick={() => router.push(item.to)}
        />
      ))}
    </BottomNavigation>
  )
}

export default CustomBottomNavigation
