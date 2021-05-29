import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'

export class FindOneDoctor {
  constructor (
    private _doctorRepository: IDoctorRepository
  ) {}

  async execute (id: number): Promise<Doctor> {
    const result = await this._doctorRepository.findOne(id)
    return result
  }
}
