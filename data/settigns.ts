import exp from "constants";
import { ColorScheme, WebsiteSettings } from "./types";

const colorScheme: ColorScheme = {
  light: {
    primary: "#3498db",
    primaryGradient: "linear-gradient(135deg, #3498db, #2980b9)",
    secondary: "#ff9966",
    secondaryGradient: "linear-gradient(135deg, #ff9966, #ff7f50)",
    background: "#f5f5f5",
    text: "#333333",
    accent: "#ff7f50",
  },
  dark: {
    primary: "#2980b9",
    primaryGradient: "linear-gradient(135deg, #2980b9, #1f618d)",
    secondary: "#ff7f50",
    secondaryGradient: "linear-gradient(135deg, #ff9966, #ff7f50)",
    background: "#2c3e50",
    text: "#ecf0f1",
    accent: "#ff9966",
  },
  shared: {
    white: "#ffffff",
    black: "#000000",
    grayLight: "#cccccc",
    grayDark: "#666666",
  },
};

const settings: WebsiteSettings = {
  font: "Merriweather",
  colorScheme,
}

export default settings;