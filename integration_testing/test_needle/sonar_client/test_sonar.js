const SonarClient = require('./test_client/sonar_client')
const constants = require('./constants')

describe('sonarqube test', () => {
    it('get branch coverage', (done) => {
        const client = new SonarClient()
        client.getProjectBranches('software-test', (resStatus, resBody) => {
            expect(resStatus).toEqual(200)
            expect(resBody).toBeDefined()

            const masterBranch = resBody.branches[0]
            const branchName = masterBranch.name
            const analysisDate = masterBranch.analysisDate

            client.getBranchCoverage('software-test', branchName, analysisDate, (branchResStatus, branchResBody) => {
                expect(branchResStatus).toBe(200)
                expect(branchResBody).toBeDefined()
                done()
            })
        })


    })
})