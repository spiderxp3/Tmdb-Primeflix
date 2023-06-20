import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#D68200",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#f44336",
        contrastText: "#ffffffff"
      },
      background: {
        default:"#070707",
        paper: "#00000080"
      }
    } : {
      primary: {
        main: "#ff0000"
      },
      secondary: {
        main: "#f44336"
      },
      background: {
        default: colors.grey["10"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
          style: {
            backgroundColor: mode === themeModes.dark ? "rgba(255, 0, 0, 0.8)" : "#ff0000",
            color: "#ffffff",
            boxShadow: "2px 4px 8x rgba(240, 120, 20)",
            borderRadius: "18px", // Add rounded corners to the button
            padding: "12px 24px", // Increase the padding for a larger button
            fontSize: "16px", // Adjust the font size
            fontWeight: "bold", // Make the text bold
            textTransform: "uppercase", // Convert the text to uppercase
            transition: "background-color 0.7s ease", // Add a smooth transition effect
            "&:hover": {
              backgroundColor: mode === themeModes.dark ? "rgba(255, 0, 0, 1)" : "#ff0000", // Darken the background color on hover in dark mode, solid red in light mode
            }
          }
        }
      }
    });
  }
};

export default themeConfigs;
