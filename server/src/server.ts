import express from 'express'
import routes from './routes'
import cors from 'cors'
import './db/mongooseDB'

const PORT = 3333
const HOST = '0.0.0.0'

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(PORT,HOST)
