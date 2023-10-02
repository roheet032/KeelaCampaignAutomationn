import {Page,Locator} from "@playwright/test"

export default class CampaignPage{
    page:Page;
    campaignName:Locator;
    campaignDescription:Locator;
    campaignFundraisingGoal:Locator;
    campaignSaveBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.campaignName=page.getByTestId('input-name')
        this.campaignDescription=page.getByTestId('input-description')
        this.campaignFundraisingGoal=page.getByTestId('input-fundraisingGoal')
        this.campaignSaveBtn=page.getByTestId('modal-save')

    }

    async createCampaignModule(name:string,description:string,fundraisinggoal:any){
        
        await this.campaignName.fill(name);
        await this.campaignDescription.fill(description)
        await this.campaignFundraisingGoal.fill(fundraisinggoal)
        await this.campaignSaveBtn.click()


    }



    // await page.getByRole('button', { name: 'Create Campaign' }).click();
    // await page.getByTestId('input-name').fill('Campaign 1');
    // await page.getByTestId('input-description').click();
    // await page.getByTestId('input-description').fill('This is test campaign 1');
    // await page.getByTestId('input-fundraisingGoal').click();
    // await page.getByTestId('input-fundraisingGoal').fill('5000');
    // await page.getByTestId('modal-save').click();
  

}