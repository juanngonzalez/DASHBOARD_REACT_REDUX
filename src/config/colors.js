const colors = {
  palette: {
    primary: {
      light: "#007864",
      main: "#007864",
      dark: "#007864",
      grey: "#bdbbbb",
      errorGradient1: "#007864",
      errorGradient2: "#0E349E",
      gradientLogin1: "#007864",
      gradientLogin2: "#0E349E",
      menuItem: "#858a93",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#96a834",
      main: "#96a834",
      dark: "#96a834",
      backgroundListItem: "#858a93",
      contrastText: "#FFFFFF",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.6em !important",
            height: "0.6em !important",
          },
          "*::-webkit-scrollbar-track": {
            backgroundColor: "lightgray !important",
            borderRadius: "7px !important",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00) !important",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#a3c5f4 !important",
            borderRadius: "7px !important",
            outline: "1px solid slategrey !important",
            border: "none !important",
          },
        },
      },
      MuiTableCell: {
        root: {
          padding: "4px 2px 4px 2px",
        },
      },
    },
  },
};

export default colors;
