const express = require('express')
const app = express()

const port = process.env.PORT || process

app.get('/', (req, res) => res.json('Hello World!'))
app.listen(port, () => console.log(`server listening on port ${port}`))
