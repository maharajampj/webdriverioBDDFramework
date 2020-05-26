import reporter from '../Utilities/Report'
var fs=require("fs")
class BaseComponent
{

    isDisplayed(element)
    {
        element.waitForDisplayed({ timeout: 10000 })
         if(element.isDisplayed())
         {
             return true
         }
            else        
        {
            element.scrollIntoView();
            reporter.addStep(element+' is not Displayed','Failed')
            assert.fail();
            
        }
    }
    isEnabled(element) 
    {
		
        if(element.isEnabled())
        {
            return true
        }
           else        
       {
           element.scrollIntoView();
           reporter.addStep(element+' is not enabled','Failed')
           assert.fail();
           
       }
		  
	}
    isSelected(element) {
		let blnValue = false;
		if (this.isDisplayed(element)) {
		blnValue = element.isSelected();
		}
		return blnValue;
    }	
    click(element) 
    {
		let blnValue = false;
		if (this.isDisplayed(element)) {
			try {
			element.click();
			blnValue = true;
			}
			catch (error) {
                console.log("Exception :"+error)
                element.scrollIntoView()
                reporter.addStep(element+' is not Clickable','Failed')
                assert.fail();
			}
		}
		return blnValue;
    }
    isElementDisplayed(element)
    {
        let flag=false
        if(element.isDisplayed())
        {
            flag=true
        }
        return flag
    }
    failStep(element)
    {
        if(element.isDisplayed())
        {
            element.scrollIntoView()
            assert.fail()
        }

    }
    ClickTillVisible(element)
    {
        let i=0
        do{
        element.click() 
        browser.pause(1000)
        i++      
        }
        while(i<31)
        
    }
    sendKeys(element, strValue)
     {
        try{
      
        element.click();
        element.clearValue()
        element.setValue(strValue);
        }
      catch(error)
        {
            element.scrollIntoView()
            assert.fail();
        }
}
clear(element) 
{
    if (this.isDisplayed(element)) 
    {
        try 
        {
        element.clearValue();
        }
        catch (error) 
        {
            console.log("Exception :"+error)
            element.scrollIntoView()
            assert.fail();
        }
    }
   
    }
    getAllText(elements) 
    {
        var strList=[]
        elements.forEach(element => 
        {
            
            strList.push(element.getText());
            
        });
        return strList;
    }
    getText(element) 
    {
		let str = "";
        if (this.isDisplayed(element)) 
        {
            try 
            {
				str = element.getText();
			}
			catch (error) {
                console.log("Exception :"+error)
                element.scrollIntoView()
                assert.fail();
			}
		}
		return str;
    }
    getAttribute(element,attribute) 
    {
		let str = "";
        if (this.isDisplayed(element)) 
        {
			try {
				str = element.getAttribute(attribute);
			}
            catch (error)
             {
                console.log("Exception :"+error)
                element.scrollIntoView()
                assert.fail();
			}
		}
		return str;
    }
    selectDropdownByValue(dropdown, values, valueToSelect) 
     {
		let index = -1;
        if (this.isDisplayed(dropdown)) 
        {
		click(dropdown);
        for (let i = 0; i < values.size(); i++) 
        {
		let ddValue = values[i].getText()
        if (ddValue.trim().equalsIgnoreCase(valueToSelect.trim())) 
        {
		index = i;
		break;
		}
	    }
        if (index >= 0) 
        {
		click(values[index]);
		}
        else 
        {
			console.log("Dropdown Value is not selected");
		}
	}
		else {
			console.log("Dropdown is not present");
        }	
        }
        moveToElement(element)
        {
         if(this.isDisplayed(element))
         {
            browser.moveToElement(element)
         }
            else        
        {
            element.scrollIntoView()
            assert.fail();
            
        }
        }
        pressTab() 
       {
           KeyboardEvent.pressTab();
       }
       pressDownArrow() 
        {
            KeyboardEvent.pressDownArrow()
        }
        pressLeftArrow() 
        {
            KeyboardEvent.pressLeftArrow()
       }
       pressEnter() 
        {
            KeyboardEvent.pressEnter()
        }
   
       closeTab() 
       {
            browser.closeWindow()
       }
       openNewTab()
       {
            browser.openNewTab()
       }
       performBackspace() 
        {
        KeyboardEvent.performBackspace()
        }
        pageRefresh() 
        {
            browser.refresh()
       }
       pasteFromClipboard() 
        {
            const text =  navigator.clipboard.readText();
        }
        ValidateImage(path)
        {
            browser.saveFullPageScreen(path);
            const Diffratio=browser.checkFullPageScreen(path)
            if(Diffratio>0)
            {
              browser.url(process.cwd()+'\\tmp\\diff\\desktop_chrome\\'+path+'.png') 
              reporter.addArgument('The Difference ratio is :',Diffratio)
              expect(Diffratio).to.equal(0)
            }

        }

         getValueByKey(path,value)
        {
            var jsonContents = fs.readFileSync(path);
            var jsonObj=JSON.parse(jsonContents)
            var result   
               for(key in jsonObj)
               {
                  if(key ===value)
                  {
                    result=jsonObj[key]
        
                  }
               }
            
            return result
            
        }
   
}
module.exports=new BaseComponent();