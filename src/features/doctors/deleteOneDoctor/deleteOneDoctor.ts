import { DeleteResult } from 'typeorm'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'

export class DeleteOneDoctor {
  constructor (
    private _doctorRepository : IDoctorRepository
  ) {}

  async execute (id: number): Promise<DeleteResult> {
    const result = await this._doctorRepository.delete(id)
    return result
  }
}
