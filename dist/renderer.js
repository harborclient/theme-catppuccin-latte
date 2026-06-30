// node_modules/.pnpm/@harborclient+sdk@0.7.0_@babel+runtime@8.0.0_@codemirror+lint@6.9.7_@codemirror+search@_0434f38fced7bbbb661910cc2ed4015b/node_modules/@harborclient/sdk/dist/runtime/index.js
function registerTheme(hc, theme) {
  const disposable = hc.themes.register(theme);
  hc.subscriptions.push(disposable);
  return disposable;
}

// src/renderer.tsx
function activate(hc) {
  registerTheme(hc, {
    id: "latte",
    title: "Catppuccin Latte",
    type: "light",
    colors: {
      surface: "#eff1f5",
      sidebar: "#e6e9ef",
      "sidebar-section": "#dce0e8",
      control: "#ccd0da",
      field: "rgba(0, 0, 0, 0.04)",
      separator: "rgba(0, 0, 0, 0.08)",
      text: "#4c4f69",
      "text-secondary": "#5c5f77",
      muted: "#7c7f93",
      accent: "#8839ef",
      selection: "rgba(136, 57, 239, 0.18)",
      danger: "#d20f39",
      warning: "#df8e1d",
      success: "#40a02b"
    },
    stylesheet: "dist/theme.css"
  });
}
export {
  activate
};
