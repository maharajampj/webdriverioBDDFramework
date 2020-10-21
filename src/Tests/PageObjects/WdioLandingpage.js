import Page from './page'
import BaseComponent from '../utilities/BaseComponent'
class WdioLandingpage extends Page 
{
    open ()
    {
     super.open("") ;   
    }

   get TasteStudio()    {return $('//b[contains(text(),"Taste Studio")]')}
   get contactUs(){return $('//*[@id="contact-us"]')}

clickContactUs()
{
  BaseComponent.click(this.contactUs)
}

}

export default new WdioLandingpage()