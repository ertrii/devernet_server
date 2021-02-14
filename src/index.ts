require('dotenv').config()
import express, { Express } from 'express'
import apollo from './apollo'
import { PORT } from './config/constants'
import './config/db'
const app: Express = express()
const { graphqlPath } = apollo(app)

app.listen(PORT, function () {
    console.log(`Server on http://localhost:${PORT}${graphqlPath}`)
})
