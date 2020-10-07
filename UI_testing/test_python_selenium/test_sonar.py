from page_objects.sonarqube_page import SonarqubePage
import constants
import pytest

def test_sonar(chrome_web_driver):
    browser = chrome_web_driver
    sonarqube = SonarqubePage(browser)

    sonarqube.goto(constants.BASEURL)

    sonarqube.click_portfolio_tab()
    sonarqube.click_project(constants.PROJECT_NAME)
    sonarqube.screenshot_project('{}.png'.format(constants.PROJECT_NAME))

    browser.quit()
