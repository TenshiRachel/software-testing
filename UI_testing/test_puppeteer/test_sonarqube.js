const constants = require('./constants')
const sonarqubePage = require('./page_objects/sonarqube_page')
const puppeteer = require('puppeteer')

describe('sonarqube test', () => {
    let browser = null
    let sonarqube = null
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        sonarqube = new sonarqubePage(await browser.pages[0])
        await sonarqube.goto(constants.BASEURL)
    })

    afterEach(async () => {
        await browser.close()
    })
})