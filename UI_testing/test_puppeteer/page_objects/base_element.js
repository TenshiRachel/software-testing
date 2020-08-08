const puppeteer = require('puppeteer')

class BaseElement {
    constructor(parent, css='body', xpath='') {
        this._parent = parent
        this._css = css
        this._xpath = xpath
        this._page = this._parent.constructor.name == 'Page' ? this._parent : this._parent._page
    }

    async goto(url) {
        await this._page.goto(url)
    }

    async click() {
        await this.find_element().click()
    }

    async screenshot(fileName) {
        await this.find_element()
        await this._page.screenshot({path: `/screenshots/${fileName}.png`})
    }

    async find_element() {
        let _context = this._page
        if (this._parent.constructor.name == 'Element') _context = await this._parent.find_element()
        if (this._xpath !== '') {
            await this._page.waitForXpath(this._xpath)
            return await (await _context.$x(this._xpath))[0]
        }
        else {
            await this._page.waitForSelector(this._css)
            return await _context.$(this._css)
        }
    }
}

module.exports = BaseElement
