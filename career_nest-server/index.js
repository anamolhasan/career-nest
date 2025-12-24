const express = require('express')
const cors = require('express')
const app = express()
const port = 5000

// middleware
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Welcome Job portal career nest server')
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})
