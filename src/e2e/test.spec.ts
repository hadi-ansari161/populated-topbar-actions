import { test, expect } from "./app-page.fixture";

test("has version", async ({ applicationPage }) => {
  console.log("url is: ", applicationPage.baseUrl);

  await applicationPage.page.goto(applicationPage.baseUrl);

  await expect(applicationPage.page).toHaveTitle(/Playwright/);
});

// test("get started link", async ({ applicationPage }) => {
//   await applicationPage.page.goto(applicationPage.baseUrl);

//   await applicationPage.page.getByRole("link", { name: "Get started" }).click();

//   await expect(
//     applicationPage.page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
