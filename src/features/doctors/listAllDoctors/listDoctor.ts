import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'

export class ListDoctor {
  constructor (
    private _doctorRepository: IDoctorRepository
  ) {}

  async execute (): Promise<Doctor[]> {
    return await this._doctorRepository.list()
  }
}
