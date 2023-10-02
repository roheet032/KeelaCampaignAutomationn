import { Page, Locator } from "@playwright/test"


export default class CampaignRevenue{

    page: Page;
    clickCampaignList: Locator;
    hoverFundraising: Locator;
    clickTransaction: Locator;
    createNewBtn: Locator;
    clickOtherRevenue: Locator;
    selectExistingContact: Locator;
    selectExistingContactOption: Locator;
    selectGiftAmount: Locator;
    clickAssociations: Locator;
    clickReceipting: Locator;
    selectIgnore: Locator;
    clickPayment: Locator;
    saveBtn: Locator;
    addRevenueTransaction:Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickCampaignList = page.getByRole('link', { name: 'Campaign 2' });
        this.hoverFundraising = page.locator('[data-tracking-tab="-Fundraising"]')
        this.clickTransaction = page.getByRole('link', { name: 'Transactions', exact: true })
        this.createNewBtn = page.locator('[data-tracking-button="campaign-transactions-create-new"]')
        this.clickOtherRevenue = page.getByText('Other Revenue')
        this.selectExistingContact = page.getByPlaceholder('Start typing to search...')
        this.selectExistingContactOption = page.getByRole('option', { name: 'Sita Khadka' })
        this.selectGiftAmount = page.getByTestId('input-amount')
        this.clickAssociations = page.getByRole('link', { name: 'Associations' })
        this.clickReceipting = page.getByRole('link', { name: 'Receipting' })
        this.selectIgnore = page.getByText('Ignore from receipting')
        this.clickPayment = page.getByRole('link', { name: 'Payment' })
        this.saveBtn = page.getByTestId('modal-save')
        this.addRevenueTransaction=page.getByText('Add Revenue Transaction')

    }

    async createFirstCampaignRevenue() {
        await this.clickCampaignList.click()
        await this.hoverFundraising.hover()
        await this.clickTransaction.click()
        await this.addRevenueTransaction.click()
        await this.selectExistingContact.click()
        await this.selectExistingContactOption.click()
        await this.selectGiftAmount.fill("30")
        await this.clickAssociations.click()
        await this.clickReceipting.click()
        await this.selectIgnore.click()
        await this.clickPayment.click()
        await this.saveBtn.click()
    }

    async createCampaignRevenue() {
        await this.clickCampaignList.click()
        await this.hoverFundraising.hover()
        await this.clickTransaction.click()
        await this.createNewBtn.click()
        await this.clickOtherRevenue.last().click()
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