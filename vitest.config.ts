import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['packages/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/*.d.ts', '**/test/**'],
    },
  },
  resolve: {
    alias: {
      '@monorepo/core': resolve(__dirname, 'packages/core/src'),
      '@monorepo/utils': resolve(__dirname, 'packages/utils/src'),
      '@monorepo/feature-a': resolve(__dirname, 'packages/feature-a/src'),
    },
  },
});