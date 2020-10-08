const SonarClient = require('./test_client/sonar_client')
const constants = require('./constants')

describe('sonarqube test', () => {
    it('get branch coverage', async () => {
        const client = new SonarClient()
        let res = await client.getProjectBranches('software-test')
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()

        const masterBranch = res.body.branches[0]
        const branchName = masterBranch.name
        const analysisDate = masterBranch.analysisDate

        res = await client.getBranchCoverage('software-test')
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
    })
})