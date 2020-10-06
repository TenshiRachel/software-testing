const webDriver = require('selenium-webdriver')
const SonarqubePage = require('./page_objects/sonarqube_page')
const constants = require('./constants')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000

describe('sonarqube test', () => {
    let driver
    let sonarqubeDriver
    it('screenshot project', async () => {
        driver = new webDriver.Builder()
        .forBrowser('chrome')
        .build()
        try{
            sonarqubeDriver = new SonarqubePage(driver)
            await sonarqubeDriver.goto(constants.BASEURL)
    
            await sonarqubeDriver.clickProjectsTab()
            await sonarqubeDriver.clickProject(constants.PROJECT_NAME)
            await sonarqubeDriver.screenshotProject()
        }
        finally {
            await driver.quit()
        }
    })
})