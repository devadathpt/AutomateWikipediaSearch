package com.wikipedia.pages;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;


public class SearchResultsPage extends AbstractWebPage {
    private static final org.apache.logging.log4j.Logger logger = LogManager.getLogger(SearchResultsPage.class);
    protected WebDriver webDriver;
    @FindBy(id = "firstHeading")
    private WebElement firstHeading;
    @FindBy(css = ".uls-language-list")
    private WebElement languageSelectorList;
    @FindBy(css = ".uls-languagefilter-clear")
    private WebElement clearLanguageFilter;
    @FindBy(css = ".mw-interlanguage-selector")
    private WebElement languageSelector;
    @FindBy(css = "input.uls-filterinput:nth-child(3)")
    private WebElement enterLanguage;
    @FindBy(css = "div.uls-lcd-region-section:nth-child(9) > div:nth-child(2) > ul:nth-child(1)")
    private WebElement languageSelectorResult;
    @FindBy(css = ".uls-no-results-found-title")
    private WebElement noResultsFound;

    public SearchResultsPage(WebDriver webDriver) {
        super(webDriver);
    }

    public String getFirstHeading() {
        logger.info(" The first Heading of the search result page is : " + firstHeading.getText());
        return firstHeading.getText();
    }

    public void translateToLanguage(String language) {
        logger.info("Clicking the translate page to :" + language);
        languageSelectorResult.click();
    }

    public boolean isLanguageAvailable(String language) {
        navigateToAnotherLanguagePage(language);
        List<WebElement> elements = languageSelectorList.findElements(By.cssSelector(".uls-no-results-found-title"));
        logger.info("Checking if we can have a link to translate to "+ language);
        if (elements.size()>0)
        {
            logger.info("Page cannot be translated to " + language);
            logger.info("                                       ");
        }
        else
        {
            logger.info("Page can be translated to " + language);
            logger.info("                                       ");
        }
        return (elements.size() > 0);

    }

    private void navigateToAnotherLanguagePage(String language) {
        languageSelector.click();
        enterLanguage.sendKeys(language);

    }
}
