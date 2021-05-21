/* eslint-disable no-useless-constructor */
import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'
import { IDoctorDTO } from '../IDoctorDTO'

export class CreateDoctor {
  constructor (
    private doctorRepository: IDoctorRepository
  ) {}

  async execute (data: IDoctorDTO): Promise<void> {
    const doctor = new Doctor(data)
    await this.doctorRepository.create(doctor)
  }
}
