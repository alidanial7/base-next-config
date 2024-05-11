/* eslint-disable react/jsx-props-no-spreading */

"use client"

import { useRouter } from "next/navigation"

import { Link, Stack } from "@mui/material"

import { TCustomLinkProps } from "./CustomLink.type"

/**
 * Renders a custom link based on the provided parameters.
 *
 * @param {TCustomLinkProps} children - The content of the link.
 * @param {string} href - The URL the link should point to.
 * @param {string} [linkType="LINK"] - The type of link, default is "LINK".
 * @param {...any} props - Additional properties for the link component.
 * @return {JSX.Element} The custom link component.
 */
function CustomLink({
  children,
  href,
  linkType = "LINK",
  disabled = false,
  ...props
}: TCustomLinkProps): JSX.Element {
  /* -------------------------------------------------------------------------- */
  /*                                    Next                                    */
  /* -------------------------------------------------------------------------- */
  const router = useRouter()

  if (disabled) {
    return (
      <Stack
        alignItems="center"
        display="flex"
        justifyContent="center"
        mx={{
          xxs: 1,
        }}
      >
        {children}
      </Stack>
    )
  }

  if (linkType === "LINK") {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <Link {...props} onClick={() => router.push(href)}>
      {children}
    </Link>
  )
}

export default CustomLink
