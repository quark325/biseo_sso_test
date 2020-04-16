const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.json({'a': 'b'})
})

app.listen(3000, () => {
	console.log("Server started on port 80")
})
