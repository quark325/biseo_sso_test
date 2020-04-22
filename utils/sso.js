const Client = require('./sparcsssov2-node.js')

console.log(process.env.SSO_CLIENT_ID, process.env.SSO_SECRET)
const client = new Client(process.env.SSO_CLIENT_ID, process.env.SSO_SECRET)

module.exports = client
