const axios = require('axios')

let createSession = function createSession(baseUrl, auth) {
    return axios.create({
        baseUrl: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`
        },
        proxy: {
            host: '127.0.0.1',
            port: 9000
        }
    })
}

exports.createSession = createSession
