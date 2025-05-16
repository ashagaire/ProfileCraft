import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f19f41",
    },
    background: {},
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: 8,
          fontSize: 14,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          "&:hover": {
            boxShadow:
              "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", // shadow-xl
          },
        },
      },
    },
  },
});

export default theme;
