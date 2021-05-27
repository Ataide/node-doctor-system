import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { DoctorRoutes } from './features/doctors/doctorRoutes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.express.use(morgan('tiny'))
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.get('/', (request, response) => {
      return response.json({
        message: 'Rota Principal'
      })
    })

    this.express.use(DoctorRoutes)
  }
}

export default new App().express
