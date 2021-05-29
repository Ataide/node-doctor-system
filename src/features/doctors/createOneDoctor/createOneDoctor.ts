/* eslint-disable no-useless-constructor */
import Doctor from '../../../entities/Doctor'
import { IDoctorRepository } from '../../../repositories/IDoctorRepository'
import { API_MESSAGES } from '../../../utils/messages'
import { IDoctorDTO } from '../IDoctorDTO'

export class CreateOneDoctor {
  constructor (
    private doctorRepository: IDoctorRepository
  ) {}

  async execute (data: IDoctorDTO): Promise<Doctor> {
    if (!data.expertises?.length) {
      throw new Error(API_MESSAGES.MISSING_EXPERTISES)
    }
    if (data.name?.length >= 120) {
      throw new Error(API_MESSAGES.INVALID_NAME)
    }
    const doctor = new Doctor(data)
    return await this.doctorRepository.create(doctor)
  }
}
