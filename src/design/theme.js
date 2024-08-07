'use client'
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";
import LinkBehaviour from "@/helper/LinkBehavior";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });


const shopTheme = createTheme({
  palette: {
    primary: { main: "#B88E2F", contrastText: "#FFF" },
    secondary: { main: "#FFF3E3", contrastText: "#333" },
    error: { main: "#E97171", contrastText: "#FFF" },
    success: { main: "#2EC1AC", contrastText: "#FFF" },
    action: {active: "#000"}
  },
  typography: {
    fontFamily: poppins.style.fontFamily
  },
  components: {
    MuiLink: {
        defaultProps: {
            component: LinkBehaviour
        }
    },
    MuiButtonBase: {
        defaultProps: {
            LinkComponent: LinkBehaviour
        }
    }
  },
});

module.exports = {shopTheme};
