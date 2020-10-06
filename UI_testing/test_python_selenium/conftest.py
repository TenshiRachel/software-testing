from selenium import webdriver
import pytest

@pytest.fixture
def chrome_web_driver():
    return webdriver.Chrome()