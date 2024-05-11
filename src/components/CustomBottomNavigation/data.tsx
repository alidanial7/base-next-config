import {
  IconLayoutDashboard,
  IconTicket,
  IconWallet,
  IconWorldWww,
} from "@tabler/icons-react"

import { TBottomNavigationAction } from "./data.type"

const bottomNavigationActionList: TBottomNavigationAction[] = [
  {
    id: 1,
    label: "پیشخوان",
    icon: <IconLayoutDashboard />,
    to: "",
  },
  {
    id: 1,
    label: "کیف پول",
    icon: <IconWallet />,
    to: "",
  },
  {
    id: 1,
    label: "بلیت‌ها",
    icon: <IconTicket />,
    to: "",
  },
  {
    id: 1,
    label: "یزدمن",
    icon: <IconWorldWww />,
    to: "",
  },
]

export default bottomNavigationActionList
