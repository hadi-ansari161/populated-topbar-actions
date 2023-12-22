import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "src/e2e/.env" file.
dotenv.config({ path: path.resolve("src", "e2e", ".env") });

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "src/e2e",

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  use: {
    trace: "on",
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "default",
      testMatch: /.*\.spec\.ts/,
    },
  ],
});
