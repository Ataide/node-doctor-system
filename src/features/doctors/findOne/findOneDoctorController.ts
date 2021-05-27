import { Request, Response } from 'express'
import { FindOneDoctor } from './findOneDoctor'

export class FindOneDoctorController {
  constructor (
    private findOneDoctor: FindOneDoctor
  ) {}

  async handler (request: Request, response:Response): Promise<Response> {
    const data = request.body()

    try {
      const doctor = await this.findOneDoctor.execute(data)
      return response.json(doctor)
    } catch (error) {
      return response.status(204).send(error.message)
    }
  }
}
