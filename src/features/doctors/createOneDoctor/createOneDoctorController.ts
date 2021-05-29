/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
// import { API_MESSAGES } from '../../../utils/messages'
import { CreateOneDoctor } from './createOneDoctor'

export class CreateDoctorController {
  constructor (
    private createOneDoctor: CreateOneDoctor
  ) {}

  async handler (request: Request, response: Response): Promise<Response> {
    try {
      const doctor = await this.createOneDoctor.execute(request.body)
      return response.status(200).json(doctor)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}
