import Page from './page'
import BaseComponent from '../utilities/BaseComponent'
class CommerceStudiopage extends page
{

    get VerifyCommerceStudio(){return $('//span[contains(text(),"Merchants")]')}

    VerifyCommerceStudioPage()
    {
    BaseComponent.isDisplayed(this.VerifyCommerceStudio)
    }

}
export default new CommerceStudiopage()