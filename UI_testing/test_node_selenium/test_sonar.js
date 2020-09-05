const webDriver = require('selenium-webdriver')
const SonarqubePage = require('./page_objects/sonarqube_page')
const constants = require('./constants')

describe('sonarqube test', () => {
    let driver
    let sonarqubeDriver
    it('screenshot project', async () => {
        driver = new webDriver.Builder()
        .forBrowser('chrome')
        .build()
        sonarqubeDriver = new SonarqubePage(driver)
        await sonarqubeDriver.goto(constants.BASEURL)

        await sonarqubeDriver.clickProjectsTab()
        await sonarqubeDriver.clickProject(constants.PROJECT_NAME)
        await sonarqubeDriver.screenshotProject()

        await sonarqubeDriver.close()
    })
})