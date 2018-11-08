Feature: Search for a String in wikipedia

  @Test
  Scenario Outline: verify search resutls and verify other language transation
    Given I am on the wikipedia home page
    And I enter a string <searchWord> to search for Language <language>
    Then the page heading matches the string <searchWord>
    And There is a link to language <translateToAnotherLanguage>
    And I successfully navigate to the page in language <translateToAnotherLanguage>
    And There is a link to language <language>
    And I successfully navigate to the page in language <language>
    Examples:
      | searchWord  | language | translateToAnotherLanguage |
      | kew Gardens | English  | French                     |
      | kew Gardens | English  | Telugu                     |

