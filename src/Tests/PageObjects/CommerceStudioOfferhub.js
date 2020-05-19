import Page from './Page'
import BaseComponent from '../utilities/BaseComponent'
import allureReporter from '@wdio/allure-reporter'
class CommerceStudioOfferhub extends Page
{

    get AddNewOfferbtn(){return $('//span[contains(text(),"ADD")]')}
    get OfferHubbtn()   {return $('//div[contains(text(),"Offer Hub")]')}
    get merchantName()  {return $('#react-select-2-input')}
    get channelName()   {return $('//label[contains(text(),"In-store")]')}

    get ActiveFilterbtn() {return '(//p[contains(text(),"'}
    get OfferCount()    {return $('//p[contains(text(),"Overall")]/b')}
    get SearchField()   {return $('//input[@name="search"]')}
    get OfferNameList() {return $$('//tr[contains(@data-tut,"offers_table")]/child::td[2]')}
    get MerchantNameList() {return $$('//tr[contains(@data-tut,"offers_table")]/child::td[3]')}
    get ExpiringOffersrightClick(){return $('//button[@class="slick-arrow slick-next"]')}
    get potentialSpends(){return $$('//div[@class="col-md-4"]/p')}
    
    
    ClickAddNewOffer()
    {
        BaseComponent.click(this.AddNewOfferbtn)
    }
    ClickOfferHub()
    {
        BaseComponent.click(this.OfferHubbtn)
    }
    ClickActiveOffers(filter)
    {
        const filterName=this.ActiveFilterbtn+filter+'")])[1]'
        BaseComponent.click($(filterName))
    }
    getOfferCount()
    {
        BaseComponent.getText(this.OfferCount)
        return BaseComponent.getText(this.OfferCount)
    }
    enterSearchText(search){

        BaseComponent.sendKeys(this.SearchField,search)
        browser.pause(5000)
    }
    ValidateTableForSearchText(search)
    {
        var list1=BaseComponent.getAllText(this.OfferNameList)
        var list2=BaseComponent.getAllText(this.MerchantNameList)
        var list3=[]
        for(let i=0;i<list1.length;i++)
        {
              list3.push(list1[i]+list2[i])  
        }
        console.log(list3)
         expect(list3).to.have.members(search);
    //  for(let i=0;i<list3.length;i++)
    //  {
    //      if(list3[i].toUpperCase().includes(search.toUpperCase()))
    //      {
    //         allureReporter.addArgument('Passed Merchant name : ',list3[i])
    //      }
    //      else
    //      {
    //         allureReporter.addArgument('Failed Merchant name : ',list3[i])
    //          assert.fail()
    //      }
    //  }

    }
  ClickRightArrow()
  {
      BaseComponent.ClickTillVisible(this.ExpiringOffersrightClick)
  }
  ValidatePotentialSpendsinExpiringOffers()
  {
      var list4=BaseComponent.getAllText(this.potentialSpends)
      for(let i=0;i<list4.length;i++)
      {
      allureReporter.addArgument('List Of Potentials Spends : ',list4[i])
      }

  }

}
export default new CommerceStudioOfferhub()