"use client"

import React, { useState } from "react"

import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material"

export default function Home() {
  /* -------------------------------------------------------------------------- */
  /*                                    State                                   */
  /* -------------------------------------------------------------------------- */

  const [value, setValue] = useState(0)

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack bgcolor="#ECF0F6" height="100vh" alignItems="center">
      <Stack
        gap={2}
        justifyContent="center"
        margin="100px auto"
        width={{
          xs: "100%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
        }}
      >
        <Typography color={theme => theme.palette.grey[900]} variant="h1">
          سوپر اپلیکیشن یزدمن
        </Typography>
        <Typography variant="h2">سوپر اپلیکیشن یزدمن</Typography>
        <Typography color={theme => theme.palette.grey[500]} variant="h6">
          این یک متن تستی است
        </Typography>
        <Button variant="contained">ورود</Button>
        <Button
          sx={{ bgcolor: theme => theme.palette.primary.dark }}
          variant="contained"
        >
          اسکن شناسه
        </Button>
        <Button color="error" variant="contained">
          استرداد بلیت
        </Button>
        <Button color="warning" variant="contained">
          عباس
        </Button>

        <Box
          bgcolor={theme => theme.palette.secondary.main}
          p={3}
          borderRadius="16px"
        >
          <Typography variant="h6">کیف پول ریالی</Typography>
          <Stack alignItems="end">
            <Typography
              fontWeight="bold"
              color={theme => theme.palette.grey[900]}
            >
              20000000ریال
            </Typography>
          </Stack>
        </Box>
        <Stack
          bgcolor={theme => theme.palette.grey[900]}
          p={3}
          borderRadius="16px"
          gap={2}
        >
          <Typography fontWeight={700} color="white" variant="h6">
            اطلاعیه جدید
          </Typography>
          <Typography variant="body2" color={theme => theme.palette.grey[500]}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است...{" "}
          </Typography>
        </Stack>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="ریالی" />
          <Tab label="امتیازی" />
          <Tab label="خدمت" />
        </Tabs>
        <TextField label="کد ملی" variant="outlined" />
      </Stack>
    </Stack>
  )
}
