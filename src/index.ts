import express, { Express } from 'express'
import apollo from './apollo'
require('dotenv').config()
const PORT = process.env.PORT || 8080

const app: Express = express()
const { graphqlPath } = apollo(app)

app.listen(PORT, function () {
    console.log(`Server on http://localhost:${PORT}${graphqlPath}`)
})
