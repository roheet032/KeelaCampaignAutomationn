import { Page, Locator } from "@playwright/test"

export default class CampaignDonation {
    page: Page;
    clickCampaignList: Locator;
    hoverFundraising: Locator;
    clickTransaction: Locator;
    createNewBtn: Locator;
    clickDonation: Locator;
    selectExistingContact: Locator;
    selectExistingContactOption: Locator;
    selectGiftAmount: Locator;
    clickAssociations: Locator;
    clickReceipting: Locator;
    selectIgnore: Locator;
    clickPayment: Locator;
    saveBtn: Locator;
    addDonationTransaction:Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickCampaignList = page.getByRole('link', { name: 'Campaign 2' });  //add here newly created compaign name for first donation transaction
        this.hoverFundraising = page.locator('[data-tracking-tab="-Fundraising"]')
        this.clickTransaction = page.getByRole('link', { name: 'Transactions', exact: true })
        this.createNewBtn = page.locator('[data-tracking-button="campaign-transactions-create-new"]')
        this.clickDonation = page.getByText('Donation')
        this.selectExistingContact = page.getByPlaceholder('Start typing to search...')
        this.selectExistingContactOption = page.getByRole('option', { name: 'Ram Shrestha' })
        this.selectGiftAmount = page.getByTestId('input-amount')
        this.clickAssociations = page.getByRole('link', { name: 'Associations' })
        this.clickReceipting = page.getByRole('link', { name: 'Receipting' })
        this.selectIgnore = page.getByText('Ignore from receipting')
        this.clickPayment = page.getByRole('link', { name: 'Payment' })
        this.saveBtn = page.getByTestId('modal-save')
        this.addDonationTransaction=page.getByText('Add Donation Transaction')

    }

    async createFirstCampaignDonation() {
        await this.clickCampaignList.click()
        await this.hoverFundraising.hover()
        await this.clickTransaction.click()
        await this.addDonationTransaction.click()
        await this.selectExistingContact.click()
        await this.selectExistingContactOption.click()
        await this.selectGiftAmount.fill("30")
        await this.clickAssociations.click()
        await this.clickReceipting.click()
        await this.selectIgnore.click()
        await this.clickPayment.click()
        await this.saveBtn.click()
    }

    async createCampaignDonation() {
        await this.clickCampaignList.click()
        await this.hoverFundraising.hover()
        await this.clickTransaction.click()
        await this.createNewBtn.click()
        await this.clickDonation.first().click()
        await this.selectExistingContact.click()
        await this.selectExistingContactOption.click()
        await this.selectGiftAmount.fill("50")
        await this.clickAssociations.click()
        await this.clickReceipting.click()
        await this.selectIgnore.click()
        await this.clickPayment.click()
        await this.saveBtn.click()
    }
}

// await page.getByRole('link', { name: 'Campaign 1 This is campaign Test1' }).click();
// await page.locator('[data-tracking-tab="-Fundraising"]').hover()
// await page.getByRole('link', { name: 'Transactions', exact: true }).click();
// await page.waitForSelector('[data-tracking-button="campaign-transactions-create-new"]');
// await page.locator('[data-tracking-button="campaign-transactions-create-new"]').click();
// await page.getByText('Donation').first().click();
// await page.getByPlaceholder('Start typing to search...').click();
// await page.getByRole('option', { name: 'Ram Shrestha' }).click();
// await page.getByTestId('input-amount').click();
// await page.getByTestId('input-amount').fill('50');
// await page.getByRole('link', { name: 'Associations' }).click();
// await page.getByRole('link', { name: 'Receipting' }).click();
// await page.getByText('Ignore from receipting').click();
// await page.getByRole('link', { name: 'Payment' }).click();
// await page.getByTestId('modal-save').click();
// await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Donation')
// await expect(page.getByTestId('display-type')).toContainText('Money')