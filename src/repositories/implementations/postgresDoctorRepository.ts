import { getRepository } from 'typeorm'
import Doctor from '../../entities/Doctor'
import Expertise from '../../entities/Expertise'
import { IDoctorRepository } from '../IDoctorRepository'

export class PostgresDoctorRepository implements IDoctorRepository {
  async getExpertiseByArrayName (names: string[]): Promise<Expertise[]> {
    const expertiseRepository = getRepository(Expertise)
    const array = []
    for (const name of names) {
      const expertise = await expertiseRepository.findOne({ where: { name: name } })
      array.push(expertise)
    }
    return array
  }

  async list (): Promise<Doctor[]> {
    const repository = getRepository(Doctor)
    return await repository.find({ relations: ['expertises'] })
  }

  async create (doctor: Doctor): Promise<Doctor> {
    const repository = getRepository(Doctor)
    return await repository.save(doctor)
  }

  async findOne (id: number): Promise<Doctor> {
    const repository = getRepository(Doctor)
    return await repository.findOne(
      {
        where: { id },
        relations: ['expertises']
      })
  }
}
