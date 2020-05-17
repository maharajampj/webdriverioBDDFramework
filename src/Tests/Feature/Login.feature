Feature: Navigating to CommerceStudio from Landing Page

    As a user on the Maya Landing Page

    Background:

        Given I am on the Maya Landing page

    Scenario: User able to navigate to CommerceStudio
        When User Clicks CommerceStudio
        Then User should navigate to CommerceStudio
    Scenario Outline:  name: User able to onboard offer
        When User Clicks CommerceStudio
        Then User should navigate to Offer Onboarding
        Then User should submit offer based on  "<data>"
        Examples:
        | onboardingData |
        | ./Tests/TestData/OfferOnboarding.json | 

    

 