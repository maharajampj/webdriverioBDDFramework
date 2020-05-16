import Page from './page'
import BaseComponent from '../utilities/BaseComponent'
class Landingpage extends Page 
{
      /**
     * define or overwrite page methods
     */
    open ()
    {
     super.open("") ;   //this will append `values` to the baseUrl to form complete URL
     browser.pause(2000);
    }
    /**
    * define elements
    */
   get From(){return $('//input[@id="src"]')}
   get To(){return $('//input[@id="dest"]') }
   get Search_btn(){return $('//button[@id="search_bt"]') }


   EnterLocation(from,to)
   {
    BaseComponent.sendKeys(this.From ,from)
    BaseComponent.sendKeys(this.To,to)
   }  
  ClickSearchButton()
  {
    BaseComponent.click(this.Search_btn)
    browser.pause(3000)
  }
}

export default new Landingpage()