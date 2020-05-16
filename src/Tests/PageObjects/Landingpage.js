const Page=require('./page');
const BaseComponent =require ('../utilities/BaseComponent');
const From= browser.$('//input[@id="src"]')
const To= browser.$('//input[@id="dest"]')
const Search_btn= browser.$('//button[@id="search_btn"]')
class Landingpage  
{
  open ()
  {
   Page.open("") ;   //this will append `values` to the baseUrl to form complete URL
  }
    /**
    * define elements
    */
    From=$('//input[@id="src"]')
   search()
   {
     const From=$('//input[@id="src"]')
     const To=$('//input[@id="dest"]')
     const Search_btn=$('//button[@id="search_btn"]')
   }

    /**
     * define or overwrite page methods
     */
  

   EnterLocation(from,to)
   {
    BaseComponent.sendKeys(From ,from)
    browser.pause(3000)
    BaseComponent.sendKeys(Search().To,to)
   }  
  ClickSearchButton()
  {
    BaseComponent.click(Search().Search_btn)
  }
}
module.exports=new Landingpage();