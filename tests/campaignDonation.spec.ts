import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import CampaignDonation from '../pages/CampaignDonation';


test('Campaign First Donation',async({page})=>{           //only for the newly created campaign

  const loginPage = new LoginPage(page);

  await loginPage.gotoKeelaLoginPage();
  await loginPage.login()
  await page.locator('[data-tracking-navigation="Campaigns"]').click(); 

  const campaignDonate=new CampaignDonation(page)
  await campaignDonate.createFirstCampaignDonation()

  
  await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Donation')
  await expect(page.getByTestId('display-type')).toContainText('Money')


})

test.only('Campaign Donation Transaction', async ({ page }) => {      //testing after one transaction done in the campaign
  test.slow()
  const loginPage = new LoginPage(page);

  await loginPage.gotoKeelaLoginPage();
  await loginPage.login()

  await page.locator('[data-tracking-navigation="Campaigns"]').click();
  const campaignDonate=new CampaignDonation(page)
  await campaignDonate.createCampaignDonation()
  await expect(page.getByTestId('transaction-details').getByTestId('display-_subCollection')).toContainText('Donation')
  await expect(page.getByTestId('display-type')).toContainText('Money')

  




})
