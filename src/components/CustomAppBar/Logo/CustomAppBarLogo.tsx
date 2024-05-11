import Image from "next/image"

import logo from "@/assets/images/my_yazd_logo.png"
import CustomLink from "@/components/CustomLink/CustomLink"

function CustomAppBarLogo() {
  return (
    <CustomLink height="50px" href="/panel" linkType="BUTTON">
      <Image alt="logo" height={40} src={logo} />
    </CustomLink>
  )
}

export default CustomAppBarLogo
