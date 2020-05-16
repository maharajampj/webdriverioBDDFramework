import {Given, When, Then} from 'cucumber';

import Landingpage from '../pageobjects/Landingpage';



When('User Clicks CommerceStudio', () =>
{
   Landingpage.ClickCommerceStudio()  
});


