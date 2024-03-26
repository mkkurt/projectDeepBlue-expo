//Colors.js
//Create a modern color scheme with dark mode support. In the app, there are tab bar, header, text, searchbar, button, warning, error, chat ui, and other components that need a color scheme. Create a file named Colors.js in the constants folder and add the following code:

export const Colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: "#2f95dc",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2f95dc",
    warning: "#f00",
    error: "#f00",
    chat: {
      user: "#2f95dc",
      bot: "#f00",
    },
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: "#2f95dc",
    tabIconDefault: "#ccc",
    tabIconSelected: "#2f95dc",
    warning: "#f00",
    error: "#f00",
    chat: {
      user: "#2f95dc",
      bot: "#f00",
    },
  },
};
