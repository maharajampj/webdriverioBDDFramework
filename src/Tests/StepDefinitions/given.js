import { Given} from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';


Given('I am on the Maya Landing page', function () 
{
  Landingpage.open(); 
  //Landingpage.Login('','');  
});

Given('I am on the faceBook Landing Page', function () 
{
  Landingpage.open(); 
  //Landingpage.Login('','');  
});

