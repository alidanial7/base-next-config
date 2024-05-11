"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material"

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
    <Stack display={{ xxs: "block", md: "none" }}>
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
    </Stack>
  )
}

export default CustomBottomNavigation
