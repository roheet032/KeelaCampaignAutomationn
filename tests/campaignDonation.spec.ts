import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import CampaignDonation from '../pages/CampaignDonation';


test.only('Campaign First Donation',async({page})=>{

  const loginPage = new LoginPage(page);

  await loginPage.gotoKeelaLoginPage();
  await loginPage.login('rohit.dhyako@keela.com', 'Test@123')
  await page.locator('[data-tracking-navigation="Campaigns"]').click(); 

  const campaignDonate=new CampaignDonation(page)
  await campaignDonate.createFirstCampaignDonation()

  
  await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Donation')
  await expect(page.getByTestId('display-type')).toContainText('Money')


})

test('Campaign Donation Transaction', async ({ page }) => {
  test.slow()
  const loginPage = new LoginPage(page);

  await loginPage.gotoKeelaLoginPage();
  await loginPage.login('rohit.dhyako@keela.com', 'Test@123')

  await page.locator('[data-tracking-navigation="Campaigns"]').click();
  const campaignDonate=new CampaignDonation(page)
  await campaignDonate.createCampaignDonation()
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
  await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Donation')
  await expect(page.getByTestId('display-type')).toContainText('Money')

  




})
