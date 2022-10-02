const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello From node CICD ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})