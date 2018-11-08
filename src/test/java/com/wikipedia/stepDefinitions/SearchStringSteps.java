package com.wikipedia.stepDefinitions;

import com.wikipedia.driver.WebDriverFactory;
import com.wikipedia.pages.SearchResultsPage;
import com.wikipedia.pages.WikipediaHomePage;
import com.wikipedia.utility.LoadConfigClass;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;

import java.io.FileInputStream;
import java.util.Properties;

public class SearchStringSteps extends AbstractSteps {

    private static final Logger logger = LogManager.getLogger(SearchStringSteps.class);
    public WikipediaHomePage homePage;
    public SearchResultsPage searchResultsPage;
    private Properties config = null;

    @Given("^I am on the wikipedia home page$")
    public void iAmOnTheWikipediaHomePage() throws Throwable {
        config = new Properties();
        FileInputStream fs1 = LoadConfigClass.configfile((FileInputStream fs) -> fs);

        config.load(fs1);

        webDriver = WebDriverFactory.createInstance();
        logger.info("Opening Browser");
        logger.info("               ");

        webDriver.get(config.getProperty("Test_URL"));
        homePage = createPage(WikipediaHomePage.class);

    }

    @And("^I enter a string (.*) to search for Language (.*)")
    public void iEnterAStringToSearchForLanguage(String word, String language) {
        searchResultsPage = homePage.searchString(word, language);

        logger.info("Searching for String in wikipedia :" + word+ " in language :"+language );
    }

    @Then("^the page heading matches the string (.*)")
    public void thePageHeadingMatchesTheStringSearched(String word) {
        Assert.assertTrue(word.equalsIgnoreCase(searchResultsPage.getFirstHeading()));

    }

    @And("^There is a link to language(.*)")
    public void thereIsAlinkToLanguage(String language) {

        Assert.assertFalse(language+" language does not exist to translate!!",searchResultsPage.isLanguageAvailable(language));
    }

    @And("^I successfully navigate to the page in language (.*)")
    public void iSuccessfullyNavigateToThePageInLanguage(String language) {
        searchResultsPage.translateToLanguage(language);
    }

    @After
    public void cleanUp() {
        webDriver.close();
    }

}
