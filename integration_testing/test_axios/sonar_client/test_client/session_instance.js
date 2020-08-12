const axios = require('axios')

let createSession = function createSession(baseUrl, auth) {
    return axios.create({
        baseUrl: baseUrl,
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
}

exports.createSession = createSession
