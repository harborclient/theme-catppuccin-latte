import { registerTheme, type PluginContext } from "@harborclient/sdk";

/**
 * Activates the Catppuccin Latte theme plugin and registers Catppuccin Latte in Appearance.
 *
 * Base palette tokens are set via `colors`; extended styling (scrollbars, focus
 * rings, pastel background, method badges) lives in `dist/theme.css`.
 *
 * @param hc - Renderer plugin context from the HarborClient host.
 */
export function activate(hc: PluginContext): void {
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
      success: "#40a02b",
    },
    stylesheet: "dist/theme.css",
  });
}
