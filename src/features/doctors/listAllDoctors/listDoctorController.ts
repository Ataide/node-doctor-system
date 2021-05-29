import { Request, Response } from 'express'
import { ListDoctor } from './listDoctor'

export class ListDoctorController {
  constructor (
    private _listDoctors: ListDoctor
  ) {}

  async handler (request: Request, response: Response): Promise<Response> {
    const doctors = await this._listDoctors.execute()
    if (!doctors) {
      return response.status(204).send()
    }
    return response.status(200).json(doctors)
  }
}
