const express = require('express')
const bodyParser = require('body-parser')
const client = require('./utils/sso.js')

const app = express()
let session = {}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/login', (req, res) => {
    const { url, state } = client.getLoginParams()
    session.state = state
    res.redirect(url)
})

app.get('/account/login/callback', async (req, res) => {
    const { code, state } = req.query
    console.log(code, state)
    const stateBefore = session.state

    if (stateBefore !== state)
        throw new Error('TOKEN MISMATCH: session might be hijacked!')

    const userData = await client.getUserInfo(code)

    res.json(userData)
})

app.listen(3000, () => {
	console.log('Server started on port 3000')
})
