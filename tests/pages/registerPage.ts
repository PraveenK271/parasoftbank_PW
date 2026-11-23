import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly signUpFormHeading: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly ssnInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpFormHeading = page.getByRole('heading', { name : 'Signing up  is easy!' });
        this.firstNameInput = page.locator("//input[@id='customer.firstName']");
        this.lastNameInput = page.locator("//input[@id='customer.lastName']");
        this.addressInput = page.locator("//input[@id='customer.address.street']");
        this.cityInput = page.locator("//input[@id='customer.address.city']");
        this.stateInput = page.locator("//input[@id='customer.address.state']");
        this.zipCodeInput = page.locator("//input[@id='customer.address.zipCode']");
        this.phoneNumberInput = page.locator("//input[@id='customer.phoneNumber']");
        this.ssnInput = page.locator("//input[@id='customer.ssn']");
        this.usernameInput = page.locator("//input[@id='customer.username']");
        this.passwordInput = page.locator("//input[@id='customer.password']");
        this.confirmPasswordInput = page.locator("//input[@id='customer.confirmPassword']");
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessage = page.getByRole('paragraph', {name: 'Your account was created successfully. You are now logged in.'});
    }

    async fillRegistrationForm( firstName: string, lastName:string, address: string, city: string, state: string, zipCode: string, phoneNumber: string, ssn: string, username: string, password: string, confirmPassword: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.zipCodeInput.fill(zipCode);
        await this.phoneNumberInput.fill(phoneNumber);
        await this.ssnInput.fill(ssn);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess() {
        expect(this.successMessage).toBeVisible();
    } 
}