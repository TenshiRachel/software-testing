const BaseElement = require('./base_element')
const constants = require('../constants')

class SonarqubePage extends BaseElement {
    constructor(css, xpath) {
        super(css, xpath)
        this.projectsTab = new BaseElement('', constants.PROJECTS_TAB_XPATH)
    }

    clickProjectsTab() {
        this.projectsTab.click()
    }

    clickProject(project) {
        this.projectLink = new BaseElement('', `//h2[@class="project-card-name"]/a[text()="${project}"]`)
        this.projectLink.click()
    }

    screenshotProject(filename) {
        this.projectOverview = new BaseElement(constants.PROJECT_OVERVIEW_SELECTOR)
        this.projectOverview.screenshot(filename)
    }
}

module.exports = SonarqubePage
