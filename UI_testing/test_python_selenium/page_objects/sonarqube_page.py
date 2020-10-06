from .base_element import BaseElement
import constants

class SonarqubePage(BaseElement):
    def __init__(self, driver, browser, _css, _xpath):
        super.__init__(driver, browser, _css, _xpath)