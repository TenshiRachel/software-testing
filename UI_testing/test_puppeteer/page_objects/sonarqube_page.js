const BaseElement = require('./base_element')
const constants = require('../constants')

class SonarqubePage extends BaseElement {
    constructor(parent, css, xpath) {
        super(parent, css, xpath)
        this.projectsTab = new BaseElement(parent, '', constants.PROJECTS_TAB_XPATH)
        this.pageOverview = new BaseElement(parent, constants.PROJECT_OVERVIEW_SELECTOR)
    }

    async clickProjectsTab() {
        this.projectsTab.click()
    }

    async clickProject(project) {
        this.projectLink = new BaseElement(parent, '', `//h2[@class="project-card-name"]/a[text()="${project}"]`)
        this.projectLink.click()
    }

    async screenshotProject(project) {
        await this.pageOverview.screenshot(project)
    }
}

module.exports = SonarqubePage
