import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class CommerceStudioOfferhub extends Page
{

    get AddNewOfferbtn(){return $('//span[contains(text(),"ADD")]')}
    get OfferHubbtn(){return $('//div[contains(text(),"Offer Hub")]')}
    get merchantName(){return $('#react-select-2-input')}
    get channelName(){return $('//label[contains(text(),"In-store")]')}
    
    
    ClickAddNewOffer()
    {
        BaseComponent.click(this.AddNewOfferbtn)
    }
    ClickOfferHub()
    {
        BaseComponent.click(this.OfferHubbtn)
    }
  

}
export default new CommerceStudioOfferhub()