import {Given, When, Then} from 'cucumber';

import Landingpage from '../pageobjects/Landingpage';
import CommerceStudioOfferhub from '../PageObjects/CommerceStudioOfferhub'
import WdioLandingpage from "../PageObjects/WdioLandingpage"



When('User Clicks CommerceStudio', () =>
{
   Landingpage.ClickCommerceStudio()  
});
When('User Clicks EngageStudio', () =>
{
   
   Landingpage.ClickEnagageStudio()  
});

When('User Clicks on {string} Filter',  (filter) =>
{

CommerceStudioOfferhub.ClickActiveOffers(filter)

});

When('User enters {string} as search term',  (search) =>
{
CommerceStudioOfferhub.enterSearchText(search)
});

When('user clicks contactUs', () =>
{
   
   WdioLandingpage.clickContactUs()
   browser.pause(2000)
});


