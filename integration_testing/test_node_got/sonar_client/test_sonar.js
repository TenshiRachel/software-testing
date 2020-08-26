const SonarClient = require('./test_client/sonar_client')

describe('sonarqube test', () => {
    it('get branch coverage', async () => {
        const apiClient = new SonarClient()
        let res = await apiClient.getProjectBranches('software-test')
        let resJson = res.body
        expect(res.statusCode).toBe(200)
        expect(resJson).toBeDefined()

        const branch = resJson.branches[0]
        const branchName = branch.name
        const analyisDate = branch.analysisDate
        res = await apiClient.getBranchCoverage('software-test', branchName, analyisDate)
        resJson = res.body
        expect(res.statusCode).toBe(200)
        expect(resJson).toBeDefined()
    })
})