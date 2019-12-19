require('./db/mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
})
