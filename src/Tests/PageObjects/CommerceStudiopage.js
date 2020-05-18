import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class CommerceStudiopage extends Page
{

    get VerifyCommerceStudio(){return $('//span[contains(text(),"Merchants")]')}
    get OfferHubbtn(){return $('//a[contains(@href,"/offers")]')}
    get AddnewMerchantbtn(){return  browser.react$('Anonymous', {
        props: { path: '/commercestudio/suggestedmerchants' }
    })}

    VerifyCommerceStudioPage()
    {
    BaseComponent.isDisplayed(this.VerifyCommerceStudio)
    }
    ClickOfferHub()
    {
        BaseComponent.click(this.OfferHubbtn)
    }
    ClickAddNewMerchant()
    {
       console.log( browser.react$('Anonymous', {
            props: { page:'Suggested',qValue:'suggested_merchants'}
        }).getText())

    }

}
export default new CommerceStudiopage()