import Page from './page'
import BaseComponent from '../utilities/BaseComponent'
class Landingpage extends Page 
{
    open ()
    {
     super.open("") ;   
     browser.pause(2000);
    }

   get TasteStudio(){return $('//a[contains(@href,"/taste_explorer")]')}
   get EngageStudio(){return $('//a[contains(@href,"/engage_studio")]') }
   get CommerceStudio(){return $('//a[contains(@href,"/commercestudio")]') }


ClickTasteStudio()
{
  BaseComponent.click(this.TasteStudio)
}
ClickEnagageStudio()
{
  BaseComponent.click(this.EngageStudio)
}
ClickCommerceStudio()
{
  BaseComponent.click(this.CommerceStudio)
}
}

export default new Landingpage()