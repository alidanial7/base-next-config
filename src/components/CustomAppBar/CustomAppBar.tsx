import { AppBar, Container, Stack, Toolbar } from "@mui/material"
import { IconMenu2, IconSearch, IconUser } from "@tabler/icons-react"

import CustomAppBarLogo from "./Logo/CustomAppBarLogo"

function CustomAppBar(): JSX.Element {
  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        display: {
          xxs: "block",
          md: "none",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ bgcolor: "#ECF0F6" }}>
        <Toolbar disableGutters>
          <Stack
            alignItems="center"
            bgcolor="white"
            borderRadius="16px"
            boxShadow="0px 5px 28px 0px #0000001f"
            direction="row"
            height="72px"
            justifyContent="space-between"
            my="1.5rem"
            px="20px"
            width="100%"
          >
            <IconMenu2 />
            <CustomAppBarLogo />
            <Stack direction="row" gap={1}>
              <IconSearch />
              <IconUser />
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default CustomAppBar
