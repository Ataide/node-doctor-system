import { Request, Response } from 'express'
import { FindOneDoctor } from './findOneDoctor'

export class FindOneDoctorController {
  constructor (
    private findOneDoctor: FindOneDoctor
  ) {}

  async handler (request: Request, response:Response): Promise<Response> {
    try {
      const id = parseInt(request.params.id)
      const doctor = await this.findOneDoctor.execute(id)
      return response.json(doctor)
    } catch (error) {
      return response.status(400).send(error.message)
    }
  }
}
