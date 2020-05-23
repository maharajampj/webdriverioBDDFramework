Feature: Validate the image with the given baseLine


    Scenario Outline:Verify pixel by pixel based on baseLine image
        Given I am on the faceBook Landing Page
        Then System Validates the screen with "<path>"
        Examples:
        | path | 
        |fullPage| 
