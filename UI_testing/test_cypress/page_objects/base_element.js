class BaseElement {
    constructor(css='body', xpath='') {
        this._css = css
        this._xpath = xpath
    }

    click() {
        this.find_element().click()
    }

    screenshot(filename) {
        this.find_element()
        cy.screenshot(filename)
    }

    find_element() {
        if (this._xpath !== '') {
            return cy.xpath(this._xpath)
        }
        else {
            return cy.get(this._css)
        }
    }
}

module.exports = BaseElement
