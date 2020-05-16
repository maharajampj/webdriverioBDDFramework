import { Given} from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';


Given('I am on the Maya Landing page', function () 
{
  Landingpage.open();    
  assert(browser.getTitle(),'maya.ai')
});
