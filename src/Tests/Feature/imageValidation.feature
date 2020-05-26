Feature: Validate the image with the given baseLine


        # Scenario Outline:Verify pixel by pixel based on Merchant Hub Page
        # Given I am on the Merchant Hub Page
        # Then Validates the screen with "<path>"
        # Examples:
        # | path | 
        # |merchantHub| 
        Scenario Outline:Verify pixel by pixel based on Suggested Merchant Page
        Given I am on the Suggedted merchant  Page
        Then Validates the screen with "<path>"
        Examples:
        | path | 
        |SuggestedMerchants| 
