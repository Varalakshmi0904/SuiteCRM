Feature: SuiteCRM Leads

  Scenario: Create a new lead - TC01
    Given User is logged in to SuiteCRM
    When User creates a new lead using Excel test data "TC01"
    Then Lead should be created successfully using Excel test data "TC01"

