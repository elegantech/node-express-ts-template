import { defineConfig } from 'vitest/config'; //eslint-disable-line node/no-unpublished-import

export default defineConfig({
  test: {
    include: ['src/**/*.spec.ts'],
  },
});
