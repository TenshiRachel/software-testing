class BaseElement {
    constructor(driver, _css, _xpath='') {
        this.driver = driver
        this._css = _css
        this._xpath = _xpath
    }

    async click() {
        this.findElement().click()
    }

    async goto(url) {
        await this.driver.get(url)
    }

    async close() {
        await this.driver.close()
    }

    async screenshot() {
        await this.findElement()
        await this.findElement().takeScreenshot()
    }

    async findElement() {
        if (this._xpath == '') {
            return await this.driver.findElement(By.css(this._css))
        }
        else {
            return await this.driver.findElement(By.xpath(this._xpath))
        }
    }
}

module.exports = BaseElement