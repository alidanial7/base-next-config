import { LinkProps } from "@mui/material"

export type TCustomLinkProps = LinkProps & {
  href: string
  linkType?: "LINK" | "BUTTON"
  disabled?: boolean
}
