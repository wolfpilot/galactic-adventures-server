import path from "path"
import { fileURLToPath } from "url"
import { loadEnvFile } from "process"
import { defineConfig, coverageConfigDefaults } from "vitest/config"

// Setup
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Fix Vite not loading ENV file in test
 *
 * @see https://github.com/vitest-dev/vitest/issues/2117
 */
loadEnvFile(path.resolve(__dirname, ".env.test"))

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        "./build/*",
        "./src/env.ts",
        "**/*.models.ts",
        "**/*.dtos.ts",
        "**/*.entities.ts",
        "**/*.ports.ts",
        "**/*.schema.ts",
        "**/*.types.ts",
        "**/types.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./typings"),
      "@api": path.resolve(__dirname, "./src/adapters/in/api"),
      "@database": path.resolve(__dirname, "./src/adapters/out/database"),
      "@payment": path.resolve(__dirname, "./src/adapters/out/payment"),
      "@entities": path.resolve(__dirname, "./src/core/entities"),
      "@migration": path.resolve(__dirname, "./src/core/migration"),
      "@ports": path.resolve(__dirname, "./src/core/ports"),
      "@services": path.resolve(__dirname, "./src/core/services"),
      "@constants": path.resolve(__dirname, "./src/lib/constants"),
      "@helpers": path.resolve(__dirname, "./src/lib/helpers"),
      "@ts": path.resolve(__dirname, "./src/types"),
    },
  },
})
