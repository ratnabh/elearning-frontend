import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    color: {
      primary: string;
      secondary: string;
      tertiory?: string;
      warning?: string;
      notify?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      primary?: string;
      secondary?: string;
      tertiory?: string;
      warning?: string;
      notify?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#309de6", contrastText: "white" },
  },
  typography: {
    button: {
      textTransform: "none",
      letterSpacing:'0.4px',
      fontSize:'16px'
    },
  },
});
