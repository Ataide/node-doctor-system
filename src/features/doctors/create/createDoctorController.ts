/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateDoctor } from './createDoctor'

export class CreateDoctorController {
  constructor (
    private createDoctor: CreateDoctor
  ) {}

  async handler (request: Request, response: Response): Promise<Response> {
    const data = request.body

    try {
      this.createDoctor.execute(data)
      return response.status(200).send('Sucess')
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}
