Feature: To add new favorite item

@CucumberScenario
Scenario Outline: Test add to favorites
  Given I am on ss.com search page
  When I click on "<firstLink>" link
  And I click on "<secondLink>" link
  And I select the first announcement
  And I add to favorites
  Then I see memo with "<favorites>"
  And I return to home page

  Examples:
      | firstLink            | secondLink | favorites |
      | transport > cars     | Audi       | (1)       |
      | electronics > phones | Apple      | (2)       |
