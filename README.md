# Catppuccin Latte Theme

Adds **Catppuccin Latte** to Settings → General → Appearance with both token overrides and a bundled stylesheet.

## Permissions

- `ui` — theme registration

## Colors + stylesheet

This plugin demonstrates the full [`hc.themes.register()`](https://harborclient.github.io/sdk/renderer-data#hcthemesregistertheme) API:

- **`colors`** — base `--mac-*` token overrides (surface, sidebar, text, accent, status colors)
- **`stylesheet`** — `dist/theme.css` for scoped rules beyond `:root`: pastel gradient background, custom scrollbars, mauve focus rings, HTTP method badge tokens, and `select option` styling

## Usage

Enable the plugin, then choose **Catppuccin Latte** from the Appearance dropdown.

## Development

1. Run `pnpm install`
2. Run `pnpm build` (or `pnpm dev` for watch mode)
3. In HarborClient, open **Settings → Plugins → Load unpacked…** and select this project folder
4. Enable the plugin and select **Catppuccin Latte** under **Settings → General → Appearance**

## Packaging

```bash
pnpm pack
```

This builds the renderer bundle, copies `theme.css` to `dist/`, and creates `../catppuccin-latte.hcp`.
