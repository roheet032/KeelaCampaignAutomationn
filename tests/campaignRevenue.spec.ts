import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import CampaignRevenue from '../pages/CampaignRevenue';


test.only('Campaign First Revenue', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoKeelaLoginPage();
    await loginPage.login('rohit.dhyako@keela.com', 'Test@123')
    await page.locator('[data-tracking-navigation="Campaigns"]').click();

    const campaignDonate = new CampaignRevenue(page)
    await campaignDonate.createFirstCampaignRevenue()


    await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Revenue')
    await expect(page.getByTestId('display-type')).toContainText('Money')


})
test('Campaign Revenue Transaction', async ({ page }) => {
    test.slow()
    const loginPage = new LoginPage(page);

    await loginPage.gotoKeelaLoginPage();
    await loginPage.login('rohit.dhyako@keela.com', 'Test@123')

    await page.locator('[data-tracking-navigation="Campaigns"]').click();

    const campaignRevenue = new CampaignRevenue(page)
    await campaignRevenue.createCampaignRevenue()

    await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Revenue')
    await expect(page.getByTestId('display-type')).toContainText('Money')






})
