import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class CommerceStudiopage extends Page
{

    get VerifyCommerceStudio(){return $('//span[contains(text(),"Merchants")]')}
    get OfferHubbtn(){return $('//a[contains(@href,"/offers")]')}

    VerifyCommerceStudioPage()
    {
    BaseComponent.isDisplayed(this.VerifyCommerceStudio)
    }
    ClickOfferHub()
    {
        BaseComponent.click(this.OfferHubbtn)
    }

}
export default new CommerceStudiopage()