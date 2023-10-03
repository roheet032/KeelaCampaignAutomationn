
import { test, Page ,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CampaignPage from '../pages/Campaignpage';

test.describe('Campaign Module Test', () => {
    
    

    test('Test the creation of the Campaign', async ({page}) => {

       const loginPage = new LoginPage(page);
        
        await loginPage.gotoKeelaLoginPage();
        await page.waitForTimeout(5000);

        await loginPage.login();
        await page.waitForTimeout(5000);


        const pageLogin=page.getByText("Welcome, Rohit RD!")

        expect(pageLogin).toContainText("Welcome, Rohit RD!")
    
    
  await page.locator('[data-tracking-navigation="Campaigns"]').click();
  await page.getByRole('button', { name: 'Create Campaign' }).click();



  const campaignModule = new CampaignPage(page);
  await campaignModule.createCampaignModule('Campaign 3','This is campaign Test3','5000')
        
        
    });

  

   
});




