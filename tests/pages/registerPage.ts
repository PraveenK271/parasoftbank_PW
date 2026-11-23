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
        this.firstNameInput = page.getByRole('textbox', { name: 'customer.firstName' });
        this.lastNameInput = page.getByRole('textbox', {name: 'customer.lastName' });
        this.addressInput = page.getByRole('textbox', {name: 'customer.address.street' });
        this.cityInput = page.getByRole('textbox', {name: 'customer.address.city' });
        this.stateInput = page.getByRole('textbox', {name: 'customer.address.state' });
        this.zipCodeInput = page.getByRole('textbox', {name: 'customer.address.zipCode' });
        this.phoneNumberInput = page.getByRole('textbox', {name: 'customer.phoneNumber' });
        this.ssnInput = page.getByRole('textbox', {name: 'customer.ssn' });
        this.usernameInput = page.getByRole('textbox', {name: 'customer.username' });
        this.passwordInput = page.getByRole('textbox', {name: 'customer.password' });
        this.confirmPasswordInput = page.getByRole('textbox', {name: 'repeatedPassword' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessage = page.getByRole('heading', {name:'Welcome '});
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