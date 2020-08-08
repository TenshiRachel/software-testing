const sonarqubePage = require('../../../page_objects/sonarqube_page')
const constants = require('../../../constants')

describe('sonarqube test', () => {
    let sonarqube = null
    beforeEach(() => {
        cy.visit('/')
    })

    it('screenshot project', () => {
        sonarqube = new sonarqubePage()
        sonarqube.clickProjectsTab()
        sonarqube.clickProject(constants.PROJECT_NAME)
        sonarqube.screenshotProject(constants.PROJECT_NAME)
    })
})
