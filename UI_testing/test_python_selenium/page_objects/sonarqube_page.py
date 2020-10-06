from .base_element import BaseElement
import constants

class SonarqubePage(BaseElement):
    def __init__(self, driver, _css='', _xpath=''):
        super().__init__(driver, _css, _xpath)
        self.portfolio_tab = BaseElement(self.driver, '', constants.PROJECTS_TAB_XPATH)
        self.overview_page = BaseElement(self.driver, constants.PROJECT_OVERVIEW_SELECTOR)

    def click_portfolio_tab(self):
        self.portfolio_tab.click()

    def click_project(self, name):
        self.project_link = BaseElement(self.driver, '', '//h2[@class="project-card-name"]/a[text()="{}"]'.format(name))
        self.project_link.click()

    def screenshot_project(self, img_name):
        self.overview_page.screenshot(img_name)
