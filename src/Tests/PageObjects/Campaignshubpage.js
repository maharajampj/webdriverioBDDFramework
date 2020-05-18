import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
let count='//p[contains(text(),"'
class Campaignshubpage extends Page
{

 CampaignCount(status)
 {
    var temp=BaseComponent.getText(count+status+'")]/following-sibling::p')
    console.log(Status+"Campaigns Count "+parseInt(temp))

 }

}
export default new Campaignshubpage()