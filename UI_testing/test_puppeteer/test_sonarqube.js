const constants = require('./constants')
const sonarqubePage = require('./page_objects/sonarqube_page')
const puppeteer = require('puppeteer')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe('sonarqube test', () => {
    let browser = null
    let sonarqube = null
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        sonarqube = new sonarqubePage(await browser.newPage())
        await sonarqube.goto(constants.BASEURL)
    })

    it('screenshot project', async () => {
        // sonarqube = new sonarqubePage((await browser.pages)[1])
        await sonarqube.clickProjectsTab()
        await sonarqube.clickProject(constants.PROJECT_NAME)
        await sonarqube.screenshotProject(constants.PROJECT_NAME)
    })

    afterEach(async () => {
        await browser.close()
    })
})