import { Given} from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';


// *** belongs to Yahoo serch feature


Given('I am on the RedBus Landing page', function () {
  // Write code here that turns the phrase above into concrete actions
  Landingpage.open();     // navigating to Landing page
  let title=browser.getTitle();
  
});
