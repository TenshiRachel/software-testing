const SonarClient = require('./test_client/sonar_client')
const constants = require('./constants')

describe('sonarqube test', () => {
    it('get branch coverage', () => {
        const client = new SonarClient()
        let res = client.getProjectBranches('software-test')
        console.log(res)
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()

        const masterBranch = res.body.branches[0]
        const branchName = masterBranch.name
        const analysisDate = masterBranch.analysisDate

        res = client.getBranchCoverage('software-test', branchName, analysisDate)
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
    })
})