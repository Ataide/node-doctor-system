import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'
import { IDoctorDTO } from '../IDoctorDTO'

export class UpdateOneDoctor {
  constructor (
    private _doctorRepository: IDoctorRepository
  ) {}

  async execute (id:number, data: IDoctorDTO): Promise<Doctor> {
    const doctor = await this._doctorRepository.findOne(id)
    console.log(doctor)
    Object.assign(doctor, data)
    console.log(doctor)
    return await this._doctorRepository.update(doctor)
  }
}
