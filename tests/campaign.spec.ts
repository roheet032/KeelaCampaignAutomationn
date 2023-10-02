
import { test, Page ,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CampaignPage from '../pages/Campaignpage';

test.describe('Campaign Module Test', () => {
    
    // let page: Page;
    // let loginPage: LoginPage;


    // test.beforeAll(async ({ browser }) => {
        
    //     // Open a new page in the browser and assign it to 'page'
    //     page = await browser.newPage();
    //     // Initialize the LoginPage with the 'page' object
    //     loginPage = new LoginPage(page);
        
    //     await loginPage.gotoKeelaLoginPage();
    //     await page.waitForTimeout(5000);

    //     await loginPage.login('rohit.dhyako@keela.com', 'Test@123');
    //     await page.waitForTimeout(5000);


    //     const pageLogin=await page.getByText("Welcome, Rohit RD!")

    //     expect(pageLogin).toContainText('Welcome, Rohit RD!')
    // });
    // test.afterAll(async () => {
       
    //     await page.close();
    // });

    test('Test the creation of the Campaign', async ({page}) => {

       const loginPage = new LoginPage(page);
        
        await loginPage.gotoKeelaLoginPage();
        await page.waitForTimeout(5000);

        await loginPage.login('rohit.dhyako@keela.com', 'Test@123');
        await page.waitForTimeout(5000);


        const pageLogin=page.getByText("Welcome, Rohit RD!")

        expect(pageLogin).toContainText('Welcome, Rohit RD!')
    
    
  await page.locator('[data-tracking-navigation="Campaigns"]').click();
  await page.getByRole('button', { name: 'Create Campaign' }).click();



  const campaignModule = new CampaignPage(page);
  await campaignModule.createCampaignModule('Campaign 3','This is campaign Test3','5000')
        

  // await page.locator('[data-tracking-navigation="Campaigns"]').click();
  // await page.waitForTimeout(3000)
  // await page.locator('[data-tracking-button="campaigns-add-campaign"]').click();
  // await campaignModule.createCampaignModule('Campaign 3','This is campaign Test3','6000')



        
    });

  

   
});




