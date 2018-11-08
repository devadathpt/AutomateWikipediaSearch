package com.wikipedia.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AbstractWebPage {

    private static final Logger LOG = LoggerFactory.getLogger(AbstractWebPage.class);

    protected  WebDriver webDriver;


    public AbstractWebPage(WebDriver webDriver) {
        this.webDriver = webDriver;
    }


    public <T extends AbstractWebPage> T createPage(Class<T> clazz){

        return PageFactory.initElements(webDriver, clazz);
    }


}
