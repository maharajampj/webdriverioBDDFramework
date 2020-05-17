import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
class CommerceStudioOfferhub extends Page
{

    get AddNewOfferbtn(){return $('//span[contains(text(),"ADD")]')}
    
    
    
    ClickAddNewOffer()
    {
        BaseComponent.click(this.AddNewOfferbtn)
    }

  

}
export default new CommerceStudioOfferhub()