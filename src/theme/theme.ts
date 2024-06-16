import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#E53D6E",
    primaryHover: "#FF6699",

    secondary: "#2D3748",
    secondaryHover: "#4A5568",
    accent: "#ED8936",
    accentHover: "#F6AD55",
    warning: "#ECC94B",
    warningHover: "#F6E05E",
    danger: "#E53E3E",
    dangerHover: "#F56565",
    nWhite: "#FFFFFF",
    nWhiteHover: "#F7FAFC",
    nBlack: "#000000",
    nBlackHover: "#1A202C",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
});
