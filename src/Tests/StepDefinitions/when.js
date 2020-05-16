import {Given, When, Then} from 'cucumber';

import Landingpage from '../pageobjects/Landingpage';



When('User Enter {string} and {string}', (from,to) =>
{
   Landingpage.EnterLocation(from,to)  
   Landingpage.ClickSearchButton()
});


