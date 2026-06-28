import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["./tests/**/*.spec.tsx"],
    exclude: ["./tests/setup-tests.ts"],
    environment: "jsdom",
    setupFiles: ["./tests/setup-tests.ts"],
    coverage: {
      enabled: true,
      thresholds: {
        branches: 10,
      },
    },
  },
});
