import { Then } from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';
import CommerceStudiopage from '../pageobjects/CommerceStudiopage';
import EngageAIpage from '../PageObjects/EnagageAIpage'
import Campaignshubpage from '../PageObjects/Campaignshubpage'




Then('User should navigate to CommerceStudio',  ()=>
 {
    CommerceStudiopage.VerifyCommerceStudioPage()
    CommerceStudiopage.ClickAddNewMerchant()

});
Then('User should navigate to Offer Onboarding',  ()=>
 {
    CommerceStudiopage.VerifyCommerceStudioPage()
    CommerceStudiopage.ClickAddNewMerchant()
});
Then('User should navigate to CampaignsHub',  ()=>
 {
    EngageAIpage.navigateToSideNavBar()
    EngageAIpage.navigateToCampaignshub()
 });
 Then('User should be see the Campaigns Count',  ()=>
 {
    Campaignshubpage.CampaignCount('Drafted')
 });