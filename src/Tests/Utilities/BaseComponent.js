class BaseComponent
{

    isDisplayed(element)
    {
        element.waitForDisplayed({ reverse: false })
         if(element.isDisplayed())
         {
             return true
         }
            else        
        {
            assert.fail();
            
        }
    }
    isEnabled(element) 
    {
		
			blnValue = element.waitForEnabled({  reverse:false });
		  
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
                assert.fail();
			}
		}
		return blnValue;
    }
    sendKeys(element, strValue)
     {
        if (this.isDisplayed(element)) 
        {
        try 
        {
        element.click();
        element.clearValue()
        element.setValue(strValue);
        }
        catch (error) 
        {
            console.log("Exception :"+error)
            assert.fail();
        }
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
            assert.fail();
        }
    }
    getAllText(element) 
    {
        var strList=[]
        for (let i = 0; i < element.size(); i++)
         {
		strList.push(element[i].getText());
		}
        return strList;
    }
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
   
}
module.exports=new BaseComponent();