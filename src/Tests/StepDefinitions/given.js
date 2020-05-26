import { Given} from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';
import MerchantHubpage from '../PageObjects/MerchantHub'
import SuggestedMerchantpage from '../PageObjects/SuggestedMerchantpage';


Given('I am on the Maya Landing page', function () 
{
  Landingpage.open(); 
  //Landingpage.Login('','');  
});

Given('I am on the Merchant Hub Page', function () 
{
  MerchantHubpage.open(); 
  //Landingpage.Login('','');  
});
Given('I am on the Suggedted merchant  Page', function () 
{
  Landingpage.open(); 
  Landingpage.Login('','');  
  SuggestedMerchantpage.open(); 
});

