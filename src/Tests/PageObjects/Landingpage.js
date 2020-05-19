import Page from './page'
import BaseComponent from '../utilities/BaseComponent'
class Landingpage extends Page 
{
    open ()
    {
     super.open("") ;   
    }

   get TasteStudio()    {return $('//b[contains(text(),"Taste Studio")]')}
   get EngageStudio()   {return $('//b[contains(text(),"Engage Studio")]') }
   get CommerceStudio() {return $('//b[contains(text(),"Commerce Studio")]') }
   get email()          {return $('//input[@name="email"]')}
   get pass()           {return $('//input[@name="password"]')}
   get submit()         {return $('//button[@type="submit"]')}


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
Login(email,pass)
{
  BaseComponent.sendKeys(this.email,email)
  BaseComponent.sendKeys(this.pass,pass)
  BaseComponent.click(this.submit)
}
}

export default new Landingpage()