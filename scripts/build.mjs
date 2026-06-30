import { buildRenderer } from '@harborclient/sdk/build';

await buildRenderer({
  jsxRuntime: 'none',
  copy: [["src/theme.css","dist/theme.css"]],
  watch: process.argv.includes('--watch')
});
