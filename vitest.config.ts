import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

/**
 * Vitest configuration.
 * @see https://vitest.dev/config/
 */
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    mockReset: true,
  },
});
