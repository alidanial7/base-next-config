import {
  PaletteOptions,
  ThemeOptions as MuiThemeOptions,
} from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

const paletteColors: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#05748F",
    dark: "#034155",
    contrastText: "#fff",
  },
  secondary: {
    main: "#BDE1ED",
    light: "#E8F4F9",
    contrastText: "#034155",
  },
  success: {
    main: "#089562",
    dark: "#037049",
    light: "#00AB4F",
  },
  error: {
    main: "#E73349",
    dark: "#D01945",
    light: "#F8C2C9",
    contrastText: "#fff",
  },
  warning: {
    main: "#F4820F",
    dark: "#DD740A",
    contrastText: "#fff",
  },
  grey: {
    "200": "#F1F1F3",
    "300": "#DBDDE0",
    "400": "#C8C8C8",
    "500": "#979797",
    "700": "#687281",
    "900": "#323846",
  },
}

const ThemeOptions: MuiThemeOptions = {
  direction: "rtl",

  palette: paletteColors,
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360, // iPhone X and below in portrait mode
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: "var(--font-vazirmatn)",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: 36,
      fontWeight: 800,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontSize: 22,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 10,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: 8,
      fontWeight: 300,
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: paletteColors.grey?.[700],
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: "bold",
          height: "42px",
          fontSize: "14px",
        },
        sizeSmall: {
          height: "36px",
          fontWeight: 500,
          borderRadius: "6px",
          boxShadow: "none",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderRadius: "12px",
          },
          "&.Mui-disabled": {
            borderRadius: "12px",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "#323846",
          boxShadow: "none",
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "0px 4px 7px 0px #D4D4D4",
          borderRadius: "16px",
          padding: "5px",
          "& .MuiTab-root.Mui-selected": {
            backgroundColor: "#E8F4F9",
            borderRadius: "11px",
            borderBottom: "red",
          },
        },
        indicator: {
          display: "none",
        },
      },
    },
  },
}

export default ThemeOptions
