const BaseElement = require('./base_element')
const constants = require('../constants')

class SonarqubePage extends BaseElement {
    constructor(driver, _css, _xpath) {
        super(driver, _css, _xpath)
        this.projectsTab = new BaseElement(driver, '', constants.PROJECTS_TAB_XPATH)
        this.pageOverview = new BaseElement(driver, constants.PROJECT_OVERVIEW_SELECTOR)
    }

    async clickProjectsTab() {
        await this.projectsTab.click()
    }

    async clickProject(project) {
        this.projectLink = new BaseElement(this.driver, '', `//h2[@class="project-card-name"]/a[text()="${project}"]`)
        this.projectLink.click()
    }

    async screenshotProject() {
        await this.pageOverview.screenshot()
    }
}

module.exports = SonarqubePage