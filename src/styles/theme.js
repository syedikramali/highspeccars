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
});
