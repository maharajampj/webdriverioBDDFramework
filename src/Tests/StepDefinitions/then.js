import { Then } from 'cucumber';
import Landingpage from '../pageobjects/Landingpage';
import CommerceStudiopage from '../pageobjects/CommerceStudiopage';
import EngageAIpage from '../PageObjects/EnagageAIpage'
import Campaignshubpage from '../PageObjects/Campaignshubpage'
import allureReporter from '@wdio/allure-reporter'
import CommerceStudioOfferhub from '../PageObjects/CommerceStudioOfferhub'




Then('Verify user is on CommerceStudio',  ()=>
 {
    CommerceStudiopage.VerifyCommerceStudioPage()
});
Then('User should navigate to OfferHub',  ()=>
 {
    CommerceStudiopage.ClickOffersHub()
});

Then('User should Validate the Offer Count',  ()=>
 {
    CommerceStudiopage.ClickOffersHub()
    allureReporter.addArgument('Total Offers Count :',CommerceStudioOfferhub.getOfferCount())
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
 Then('Validate the results are relative to {string}',  (string)=>
 {
   CommerceStudioOfferhub.ValidateTableForSearchText(string)
 });
 Then('Validate the potential spends in expiring offers',  ()=>
 {
   CommerceStudioOfferhub.ClickRightArrow()
   CommerceStudioOfferhub.ValidatePotentialSpendsinExpiringOffers()
});
 
