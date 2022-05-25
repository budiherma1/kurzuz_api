import _ from './env.js'
import router from './routes/index.js'
import express from 'express'
const app = express()
const port = 3000

// 



// 
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})