import { test as base } from "@playwright/test";
import { ApplicationPage } from "./app-page";

export const test = base.extend<{ applicationPage: ApplicationPage }>({
  applicationPage: async ({ page }, use) => {
    const applicationPage = new ApplicationPage(
      page,
      process.env.APP_URL ?? "www.example.com"
    );

    await use(applicationPage);
  },
});

export { expect } from "@playwright/test";
