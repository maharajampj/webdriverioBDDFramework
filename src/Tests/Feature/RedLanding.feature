Feature: Performing Search on the RedBus Landing Page

    As a user on the RedBus Landing Page

    Background:

        Given I am on the RedBus Landing page

    Scenario Outline: User able to Search for a Travel
        When User Enter "<From>" and "<To>"
        Then Result List should get displayed

        Examples:
        |From   |To    |
        |Chennai|Madurai|
    

 