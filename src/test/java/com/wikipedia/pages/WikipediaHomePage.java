package com.wikipedia.pages;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class WikipediaHomePage extends AbstractWebPage {
    protected WebDriver webDriver;
    private static final org.apache.logging.log4j.Logger logger = LogManager.getLogger(WikipediaHomePage.class);

    public WikipediaHomePage(WebDriver webDriver) {
        super(webDriver);
    }

    @FindBy(id = "searchInput")
    private WebElement searchInput;

    @FindBy(id = "searchLanguage")
    private WebElement searchLanguage;

    @FindBy(css = ".pure-button")
    private WebElement searchButton;


    public SearchResultsPage searchString(String word,String language)
    {
        searchInput.sendKeys(word);
        List<WebElement> allLang=searchLanguage.findElements(By.tagName("option"));

        for (WebElement w: allLang
             ) {
            if(w.getText().equalsIgnoreCase(language)) {
                w.click();
            }
        }

        searchButton.click();
        return createPage(SearchResultsPage.class);

    }
}
