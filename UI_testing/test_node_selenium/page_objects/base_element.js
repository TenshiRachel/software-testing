const webDriver = require('selenium-webdriver')

class BaseElement {
    constructor(driver, _css, _xpath='') {
        this.driver = driver
        this._css = _css
        this._xpath = _xpath
    }

    async click() {
        await (await this.findElement()).click()
    }

    async goto(url) {
        await this.driver.get(url)
    }

    async screenshot() {
        await (await this.findElement()).takeScreenshot()
    }

    async findElement() {
        if (this._xpath == '') {
            return await this.driver.wait(webDriver.until.elementLocated(webDriver.By.css(this._css)))
        }
        else {
            return await this.driver.wait(webDriver.until.elementLocated(webDriver.By.xpath(this._xpath)))
        }
    }
}

module.exports = BaseElement