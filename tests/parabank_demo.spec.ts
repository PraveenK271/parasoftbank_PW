import { test, expect } from "@playwright/test"

test("Launch URL and page load", async ({page}) => {
    page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
})