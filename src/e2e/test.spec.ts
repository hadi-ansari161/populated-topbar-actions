import { test, expect } from "./app-page.fixture";

test("has version", async ({ applicationPage }) => {
  // await applicationPage.page.goto("https://stage.mysystems.axis.com/");
  await applicationPage.page.goto(applicationPage.baseUrl);

  await applicationPage.login({
    userName: process.env.E2E_USER ?? "",
    password: process.env.E2E_PASSWORD ?? "",
  });

  const topbarVersion = await applicationPage.helpMenu.getAttribute(
    "data-version"
  );

  expect(topbarVersion).toBe("6.3.7");

  expect(true).toBeTruthy();
});
