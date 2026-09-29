Feature: SuiteCRM Accounts

  Scenario: Create a new account - TC01
    Given User is logged in to SuiteCRM
    When User creates a new account using Excel test data "TC01"
    Then Account should be created successfully using Excel test data "TC01"