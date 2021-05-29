import { Request, Response } from 'express'
import { DeleteOneDoctor } from './deleteOneDoctor'

export class DeleteOneDoctorController {
  constructor (
    private _deleteOneDoctor : DeleteOneDoctor
  ) {}

  async handler (request: Request, response: Response): Promise<Response> {
    try {
      const result = await this._deleteOneDoctor.execute(parseInt(request.params.id))
      return response.json(result)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
