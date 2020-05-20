Feature: Validating Features in Offer Hub

    Scenario Outline: Verify Dining Offer Count
        Given I am on the Maya Landing page
        When User Clicks CommerceStudio
        And Verify user is on CommerceStudio
        And  User should navigate to OfferHub 
        And User Clicks on "<Filter>" Filter
        Then User should Validate the Offer Count
        Examples:
        |Filter  |
        |Dining|
        
    Scenario Outline:  Verify Draft Offer Count
        Given I am on the Maya Landing page
        When User Clicks CommerceStudio
        And  Verify user is on CommerceStudio
        And  User should navigate to OfferHub 
        And  User Clicks on "<Filter>" Filter
        Then User should Validate the Offer Count
        Examples:
        |Filter  |
        |Draft|
    Scenario Outline: Verify Search functionality in Offers Hub table
        Given I am on the Maya Landing page
        When User Clicks CommerceStudio
        And Verify user is on CommerceStudio
        And  User should navigate to OfferHub 
        And User enters "<searchBy>" as search term
        Then Validate the results are relative to "<searchBy>"
        Examples:
        |searchBy|
        | |
    Scenario: Verify potential spends in expiring offers
        Given I am on the Maya Landing page
        When User Clicks CommerceStudio
        And Verify user is on CommerceStudio
        And  User should navigate to OfferHub 
        Then Validate the potential spends in expiring offers


    

 