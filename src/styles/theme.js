const { createTheme } = require("@mui/material/styles");

export const darkTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "default",
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export const lightTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
