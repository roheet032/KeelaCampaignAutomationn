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

  

}