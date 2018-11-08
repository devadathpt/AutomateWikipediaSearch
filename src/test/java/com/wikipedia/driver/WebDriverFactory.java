package com.wikipedia.driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class WebDriverFactory {

    private static final Logger LOG = LoggerFactory.getLogger(WebDriverFactory.class);
    public static Properties config = null;

    public static WebDriver createInstance() throws IOException {


        ChromeOptions options = new ChromeOptions();
        options.addArguments("chrome.switches", "--disable-extensions --disable-extensions-file-access-check --disable-extensions-http-throttling");
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//chromedriver.exe");


        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

        return driver;
    }


    private static DesiredCapabilities getDesiredCapabilities() {
        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        return capabilities;
    }

}
