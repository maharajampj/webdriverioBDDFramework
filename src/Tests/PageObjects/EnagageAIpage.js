import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class EngageAIpage extends Page
{
    get sideNavBar(){return browser.react$('t', {
        state: { sidebarExpanded: 'false' }
    })}
    get campaignsHubbtn(){return $('//p[contains(text(),"Campaigns Hub")]')}



    navigateToSideNavBar()
    {
       // BaseComponent.moveToElement(this.sideNavBar)
       browser.pause(8000)
       browser.react$('t', {state: { sidebarExpanded: 'false' }}).click()
    }
    navigateToCampaignshub()
    {
        BaseComponent.click(this.campaignsHubbtn)

    }


}
export default new EngageAIpage()