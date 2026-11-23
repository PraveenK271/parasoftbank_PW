import {expect,  Locator, Page} from "@playwright/test";

export class HomePage {

    //Homepage Locators
    //Title: ParaBank | Welcome | Online Banking
    private page: Page;
    readonly adminLink: Locator;
    readonly title: Locator;
    readonly leftMenu: Locator;
    readonly solutions: Locator;
    readonly aboutUs: Locator;
    readonly services: Locator;
    readonly products: Locator;
    readonly locations: Locator;
    readonly adminPage: Locator;
    readonly homePageIcon: Locator;
    readonly aboutUsIcon: Locator;
    readonly contactUsIcon: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly forgotLoginInfo: Locator;
    readonly register: Locator;
    readonly withdrawFunds: Locator;
    readonly transferFunds: Locator;
    readonly checkBalances: Locator;
    readonly makeDeposits: Locator;
    readonly billPay: Locator;
    readonly accoountHisory: Locator;
    readonly transgerFunds: Locator;
    readonly serviceReadMore: Locator;
    readonly news1: Locator;
    readonly news2: Locator;
    readonly news3: Locator;
    readonly newsReadMore: Locator;
    readonly footer: Locator;
    readonly copyright: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminLink = page.locator(".admin"); //CSS selector
        this.title = page.getByAltText("ParaBank"); //alt text for image
        this.leftMenu = page.locator(".leftmenu");//CSS selector return a list of elements
        this.solutions = this.leftMenu.getByRole("listitem", {name: "Solutions"}); //Getting list item with role listitem and name Solutions
        this.aboutUs = this.leftMenu.getByRole("listitem", {name: "About Us"});
        this.services = this.leftMenu.getByRole("listitem", {name: "Services"});
        this.products = this.leftMenu.getByRole("listitem", {name: "Products"});
        this.locations = this.leftMenu.getByRole("listitem", {name: "Locations"});
        this.adminPage = this.leftMenu.getByRole("listitem", {name: "Admin Page"});
        this.homePageIcon = page.locator("//ul[@class='button']").getByRole("listitem",{name: "home"})//XPath selector to get the list item with name home
        this.aboutUsIcon = page.locator("//ul[@class='button']").getByRole("listitem",{name: "aboutus"});
        this.contactUsIcon = page.locator("//ul[@class='button']").getByRole("listitem",{name: "contact"});
        this.userName = page.getByRole("textbox", {name: "username"});
        this.password = page.getByRole("textbox", {name: "password"});
        this.loginButton = page.getByRole("button",{name: "Log In"});
        this.forgotLoginInfo = page.getByRole("link", {name: "Forgot login info?"});
        this.register = page.getByRole("link", {name: "Register"});
        this.withdrawFunds = page.getByRole("link",{name : "Withdraw Funds"});
        this.transferFunds = page.getByRole("link",{name : "Transfer Funds"});
        this.checkBalances = page.getByRole("link",{name : "Check Balances"});
        this.makeDeposits = page.getByRole("link",{name : "Make Deposits"});
        this.billPay = page.getByRole("link",{name : "Bill Pay"});
        this.accoountHisory = page.getByRole("link",{name : "Account History"});
        this.transgerFunds = page.getByRole("link",{name : "Transfer Funds"});
        this.serviceReadMore = page.locator("//ul[@classs='servicestwo']/following-sibling::p[@class='more']").getByRole("link",{name: "Read More"});
        this.news1 = page.locator("//ul[@class='events']/li").nth(1);
        this.news2 = page.locator("//ul[@class='events']/li[3]//a");
        this.news3 = page.locator("//div[@id='news']//ul//li[4]//a");
        this.newsReadMore = page.locator("//ul[@classs='events']/following-sibling::p[@class='more']").getByRole("link",{name: "Read More"});
        this.footer = page.locator("#footerPanel/ul");
        this.copyright = page.getByText("© Parasoft. All rights reserved.");
    }
    //Navaigte to admin page by clicking on the Admin link in the header
    async navigateToAdminPage() {
        await this.adminLink.click();
    }
    //Navigate to About Us page by clicking on the About Us link in the left menu
    async navigateToAboutUsPage() {
        await this.aboutUs.click();
    }
    //Navigate to services page by clicking on the Services link in the left menu
    async navigateToServicesPage() {
        await this.services.click();
    }
    //Navigate to products page by clicking on the Products link in the left menu
    async navigateToProductsPage() {
        await this.products.click();
    }
    //Navigate to locations page by clicking on the Locations link in the left menu
    async navigateToLocationsPage() {
        await this.locations.click();
    }
    //Navigate to admin page by clicking on the Admin Page link in the left menu
    async navigateToAdminPageviaLeftMenu() {
        await this.adminPage.click();
    }
    //Navigate to home page by clicking on the home icon button in the header
    async navigateToHomePage() {
        await this.homePageIcon.click();
    }
        //Navigate to About Us page by clicking on the About Us icon button in the header
    async navigateToAboutUsIconPage() {
        await this.aboutUsIcon.click();
    }
    //Navigate to Contact Us page by clicking on the Contact Us icon button in the header
    async navigateToContactUsIconPage() {
        await this.contactUsIcon.click();
    }
    //Login to the application by entering username and password and clicking on the login button
    async login(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    //Navigate to register page by clicking on the Register link in the header
    async navigateToRegisterPage() {
        await this.register.click();
    }
    //Navigate to forgot login info page by clicking on the Forgot login info?
    async navigateToForgotLoginInfoPage() {
        await this.forgotLoginInfo.click();
    }
    //Navigate to withdraw funds page by clicking on the Withdraw Funds link in the ATM services section
    async navigateToWithdrawFundsPage() {
        await this.withdrawFunds.click();
    }   
    //Navigate to transfer funds page by clicking on the Transfer Funds link in the ATM services section
    async navigateToTransferFundsPage() {
        await this.transferFunds.click();
    }
    //Navigate to check balances page by clicking on the Check Balances link in the ATM services section
    async navigateToCheckBalancesPage() {
        await this.checkBalances.click();
    }
    //Navigate to make deposits page by clicking on the Make Deposits link in the ATM services section
    async navigateToMakeDepositsPage() {
        await this.makeDeposits.click();
    }
    //Navigate to bill pay page by clicking on the Bill Pay link in the Online services section
    async navigateToBillPayPage() {
        await this.billPay.click();
    }
    //Navigate to account history page by clicking on the Account History link in the Online services section
    async navigateToAccountHistoryPage() {
        await this.accoountHisory.click();
    }
    //Navigate to transfer funds page by clicking on the Transfer Funds link in the Online services section
    async navigateToReadMoreServicePage() {
        await this.serviceReadMore.click();
    }
    //Navigate to news page by clicking on the Read More link in the Services section
    async navigateToReadMoreNewsPage() {
        await this.newsReadMore.click();
    }
    //Navigate to news page by clicking on the Read More link in the News section
    async navigateToNews1Page() {
        await this.news1.click();
    }
    //Navigate to news page by clicking on the Read More link in the News section
    async navigateToNews2Page() {
        await this.news2.click();
    }
    //Navigate to news page by clicking on the Read More link in the News section
    async navigateToNews3Page() {
        await this.news3.click();
    }
} 