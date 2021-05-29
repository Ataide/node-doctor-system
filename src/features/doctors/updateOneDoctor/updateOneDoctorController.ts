import { Request, Response } from 'express'
import { UpdateOneDoctor } from './updateOneDoctor'

export class UpdateOneController {
  constructor (
    private _updateOneDoctor: UpdateOneDoctor
  ) {}

  async handler (request: Request, response: Response): Promise<Response> {
    try {
      const doctor = await this._updateOneDoctor.execute(request.body.id, request.body)
      return response.status(200).json(doctor)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
