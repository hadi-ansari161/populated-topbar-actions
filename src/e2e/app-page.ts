//--------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
//--------------------------------------------------------------------

import { Page } from "@playwright/test";

export class ApplicationPage {
  public readonly page: Page;
  public readonly baseUrl: string;
  //   public readonly populatedTopbarVersion: Locator;

  constructor(page: Page, baseUrl: string) {
    this.page = page;
    this.baseUrl = baseUrl;
  }
}
