Feature: SuiteCRM Login

  Scenario: Login with valid credentials
    Given User is on the SuiteCRM login page
    When User logs in using Excel test data "TC001"
    Then User should see the SuiteCRM dashboard

  Scenario: Login with invalid credentials
    Given User is on the SuiteCRM login page
    When User logs in using Excel test data "TC002"
    Then User should see the login error message
  
  @Validation
  Scenario Outline: Login with valid credentials
    Given User is on the SuiteCRM login page
    When User logs in to CRM using "<username>" and "<password>"
    Then User should see the SuiteCRM dashboard

    Examples:
      | username       | password   |
      | will            | will|
    | invalid_user2    | invalid_pass2|