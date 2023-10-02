import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import CampaignRevenue from '../pages/CampaignRevenue';


test('Campaign First Revenue', async ({ page }) => {      //only for newly created campaign

    const loginPage = new LoginPage(page);

    await loginPage.gotoKeelaLoginPage();
    await loginPage.login('rohit.dhyako@keela.com', 'Test@123')
    await page.locator('[data-tracking-navigation="Campaigns"]').click();

    const campaignDonate = new CampaignRevenue(page)
    await campaignDonate.createFirstCampaignRevenue()


    await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Revenue')
    await expect(page.getByTestId('display-type')).toContainText('Money')


})
test.only('Campaign Revenue Transaction', async ({ page }) => {
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
