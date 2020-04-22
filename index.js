const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.json({'a': 'b'})
})

app.listen(3000, () => {
	console.log("Server started on port 80")
})
