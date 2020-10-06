## Selenium WebDriver (Python)

This is an example of doing functional testing with [Selenium WebDriver](https://github.com/SeleniumHQ/selenium) with [Pytest](https://github.com/pytest-dev/pytest) in Python.

[Selenium docs](https://www.selenium.dev/selenium/docs/api/py/)

[Pytest docs](https://docs.pytest.org/en/stable/contents.html)

### Setup

Make sure you have installed the required driver for the associated browser and browser vesrion from [here](https://www.selenium.dev/selenium/docs/api/javascript/index.html) and place the executable on your system path.

Next, run the following command.

```shell
# install required packages
test_python_selenium$ pip install -r requirements.txt
```

### Run test

```shell
test_python_selenium$ pytest test_sonar.py
```
