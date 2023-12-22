//--------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
//--------------------------------------------------------------------

import { Locator, Page } from "@playwright/test";

export type LoginCredentials = {
  userName: string;
  password: string;
};

export class ApplicationPage {
  public readonly page: Page;
  public readonly baseUrl: string;
  public readonly helpMenu: Locator;

  constructor(page: Page, baseUrl: string) {
    this.page = page;
    this.baseUrl = baseUrl;
    this.helpMenu = page.locator("[data-testid=help-menu-trigger]");
  }

  public async login(loginCredentials: LoginCredentials) {
    await this.waitForStableState();
    await this.fillInLoginFormAndSubmit(loginCredentials);
    await this.waitForStableState();
  }

  public async waitForStableState() {
    await this.page.waitForLoadState("load", { timeout: 30000 });
  }

  public async fillInLoginFormAndSubmit(loginCredentials: LoginCredentials) {
    await this.waitForStableState();
    await this.page.fill("[id=email]", loginCredentials.userName);
    await this.page.fill("[id=passwordfield]", loginCredentials.password);
    await this.page.locator("[id=login-form-submit-button]").click();
  }
}
