const needle = require('needle')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
    }

    getProjectBranches(project) {
        const url = this.baseUrl + constants.PROJECT_BRANCHES_ENDPOINT
        const options = {
            json: true,
            headers: {
                'Authorization': 'Bearer ' + this.auth
            }
        }
        const params = {
            project: project
        }

        return needle.request('get', url, params, options)
    }

    getBranchCoverage(project, branch, analysisDate) {
        const url = this.baseUrl + constants.BRANCH_COVERAGE_ENDPOINT
        const options = {
            json: true,
            headers: {
                'Authorization': 'Bearer ' + this.auth
            }
        }
        const params = {
            component: project,
            branch: branch,
            from: analysisDate,
            to: analysisDate,
            metrics: 'coverage'
        }

        return needle.request('get', url, params, options)
    }
}

module.exports = SonarClient