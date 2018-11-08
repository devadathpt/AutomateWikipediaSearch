$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/SearchString.feature");
formatter.feature({
  "line": 1,
  "name": "Search for a String in wikipedia",
  "description": "",
  "id": "search-for-a-string-in-wikipedia",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verify search resutls and verify other language transation",
  "description": "",
  "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a string \u003csearchWord\u003e to search for Language \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the page heading matches the string \u003csearchWord\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "There is a link to language \u003ctranslateToAnotherLanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully navigate to the page in language \u003ctranslateToAnotherLanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "There is a link to language \u003clanguage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I successfully navigate to the page in language \u003clanguage\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;",
  "rows": [
    {
      "cells": [
        "searchWord",
        "language",
        "translateToAnotherLanguage"
      ],
      "line": 13,
      "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;;1"
    },
    {
      "cells": [
        "kew Gardens",
        "English",
        "French"
      ],
      "line": 14,
      "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;;2"
    },
    {
      "cells": [
        "kew Gardens",
        "English",
        "Telugu"
      ],
      "line": 15,
      "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "verify search resutls and verify other language transation",
  "description": "",
  "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a string kew Gardens to search for Language English",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the page heading matches the string kew Gardens",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "There is a link to language French",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully navigate to the page in language French",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "There is a link to language English",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I successfully navigate to the page in language English",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchStringSteps.iAmOnTheWikipediaHomePage()"
});
formatter.result({
  "duration": 7231561156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kew Gardens",
      "offset": 17
    },
    {
      "val": "English",
      "offset": 52
    }
  ],
  "location": "SearchStringSteps.iEnterAStringToSearchForLanguage(String,String)"
});
formatter.result({
  "duration": 4185048237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kew Gardens",
      "offset": 36
    }
  ],
  "location": "SearchStringSteps.thePageHeadingMatchesTheStringSearched(String)"
});
formatter.result({
  "duration": 552582134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " French",
      "offset": 27
    }
  ],
  "location": "SearchStringSteps.thereIsAlinkToLanguage(String)"
});
formatter.result({
  "duration": 20864487338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "French",
      "offset": 48
    }
  ],
  "location": "SearchStringSteps.iSuccessfullyNavigateToThePageInLanguage(String)"
});
formatter.result({
  "duration": 1123002566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " English",
      "offset": 27
    }
  ],
  "location": "SearchStringSteps.thereIsAlinkToLanguage(String)"
});
formatter.result({
  "duration": 21138609856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 48
    }
  ],
  "location": "SearchStringSteps.iSuccessfullyNavigateToThePageInLanguage(String)"
});
formatter.result({
  "duration": 406607382,
  "status": "passed"
});
formatter.after({
  "duration": 2079993461,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify search resutls and verify other language transation",
  "description": "",
  "id": "search-for-a-string-in-wikipedia;verify-search-resutls-and-verify-other-language-transation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter a string kew Gardens to search for Language English",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the page heading matches the string kew Gardens",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "There is a link to language Telugu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully navigate to the page in language Telugu",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "There is a link to language English",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I successfully navigate to the page in language English",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchStringSteps.iAmOnTheWikipediaHomePage()"
});
formatter.result({
  "duration": 4235326625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kew Gardens",
      "offset": 17
    },
    {
      "val": "English",
      "offset": 52
    }
  ],
  "location": "SearchStringSteps.iEnterAStringToSearchForLanguage(String,String)"
});
formatter.result({
  "duration": 4145328583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kew Gardens",
      "offset": 36
    }
  ],
  "location": "SearchStringSteps.thePageHeadingMatchesTheStringSearched(String)"
});
formatter.result({
  "duration": 540621053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Telugu",
      "offset": 27
    }
  ],
  "location": "SearchStringSteps.thereIsAlinkToLanguage(String)"
});
formatter.result({
  "duration": 1428982234,
  "error_message": "java.lang.AssertionError:  Telugu language does not exist to translate!!\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.wikipedia.stepDefinitions.SearchStringSteps.thereIsAlinkToLanguage(SearchStringSteps.java:57)\r\n\tat ✽.And There is a link to language Telugu(src/test/resources/feature/SearchString.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Telugu",
      "offset": 48
    }
  ],
  "location": "SearchStringSteps.iSuccessfullyNavigateToThePageInLanguage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " English",
      "offset": 27
    }
  ],
  "location": "SearchStringSteps.thereIsAlinkToLanguage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 48
    }
  ],
  "location": "SearchStringSteps.iSuccessfullyNavigateToThePageInLanguage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2119144568,
  "status": "passed"
});
});