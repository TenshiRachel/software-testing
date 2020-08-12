const SonarClient = require('./test_client/sonar_client')
const Constants = require('./constants')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe('sonarqube test', () => {
    it('get metric types', async () => {
        const apiClient = new SonarClient()
        let res = await apiClient.get_metric_badge(Constants.projectName)
        expect(res.status).toBe(200)
        expect(res.data).toBeDefined()
    })

    it('get project coverage', async () => {
        const apiClient = new SonarClient()
        let res = await apiClient.get_coverage(Constants.projectName)
        expect(res.status).toBe(200)
        expect(res.data).toBeDefined()
    })
})
