import express from 'express'

import usersRouter from './routes/api/users.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', usersRouter)

app.listen(PORT, () => console.log(`Server is started on port: ${PORT}`))
