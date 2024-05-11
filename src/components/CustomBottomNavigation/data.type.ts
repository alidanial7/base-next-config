import { ReactElement } from "react"

import { TablerIconsProps } from "@tabler/icons-react"

export type TBottomNavigationAction = {
  id: number
  label: string
  icon: TablerIconsProps & ReactElement
  to: string
}
