import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'

export class FindOneDoctor {
  constructor (
    private _doctorRepository: IDoctorRepository
  ) {}

  async execute (doctor: Doctor): Promise<Doctor> {
    const result = await this._doctorRepository.findOne(doctor)
    return result
  }
}
