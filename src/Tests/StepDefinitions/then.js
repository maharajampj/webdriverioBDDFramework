import { Then } from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';
import CommerceStudiopage from '../pageobjects/CommerceStudiopage';



Then('User should navigate to CommerceStudio',  ()=>
 {
    CommerceStudiopage.VerifyCommerceStudioPage()
});
