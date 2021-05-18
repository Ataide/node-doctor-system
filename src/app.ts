import 'dotenv/config'
import 'reflect-metadata'
import './database/connect'
import express from 'express'
import cors from 'cors'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.get('/', (request, response) => {
      return response.json({
        Message: process.env.POSTGRES_HOST
      })
    }
    )
  }
}

export default new App().express
