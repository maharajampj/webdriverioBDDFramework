Feature: Navigating to Campaigns Hub from Landing Page

    As a user on the Maya Landing Page

    Background:

        Given I am on the Maya Landing page

    Scenario: User able to validate the Campaigns in Campaign hub
        When User Clicks EngageStudio
        Then User should navigate to CampaignsHub
        Then User should be see the Campaigns Count