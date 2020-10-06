from selenium.webdriver.support.ui import WebDriverWait

class BaseElement:
    def __init__(self, driver, browser, _css, _xpath):
        self.driver = driver
        self.browser = browser
        self.css = _css
        self.xpath = _xpath

    def click(self):
        self.find_element().click()

    def goto(self, url):
        self.browser.get(url)

    def screenshot(self, img_name):
        self.find_element()
        self.driver.save_screenshot(img_name)

    def find_element(self):
        if self.xpath == '':
            return WebDriverWait(self.driver).until(lambda x: x.find_element_by_css_selector(self.css))
        else:
            return WebDriverWait(self.driver).until(lambda x: x.find_element_by_css_selector(self.xpath))
