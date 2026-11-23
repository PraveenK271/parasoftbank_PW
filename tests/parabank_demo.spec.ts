import { test, expect } from "@playwright/test"
import { RegisterPage } from "./pages/registerPage";    
import { HomePage } from "./pages/homePage";

test("Launch URL and page load", async ({page}) => {
    page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
})

test("Launch URL and validate page loads", async ({page})=>{
    const homepage = new HomePage(page);
    await page.goto("htttps://https://parabank.parasoft.com/parabank");
    expect(homepage.title).toBeVisible();
})

test("Register a new user", async ({page}) =>{
    const registerUser = new RegisterPage(page);
    const homepage = new HomePage(page);
    await page.goto("https://parabank.parasoft.com/parabank");
    await homepage.navigateToRegisterPage();
    await registerUser.fillRegistrationForm("John", "Doe", "123 Main St", "Anytown", "CA", "12345", "555-555-5555", "123-45-6789", "johndoe", "password123", "password123");
    await registerUser.verifyRegistrationSuccess();
})