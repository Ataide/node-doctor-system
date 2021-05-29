import { DeleteResult } from 'typeorm'
import Doctor from '../entities/Doctor'
import Expertise from '../entities/Expertise'

export interface IDoctorRepository {

  list(): Promise<Doctor[]>
  create(doctor: Doctor): Promise<Doctor>
  update(doctor: Doctor): Promise<Doctor>
  delete(id: number): Promise<DeleteResult>
  findOne(id: number): Promise<Doctor>
  getExpertiseByArrayName(names: string[]): Promise<Expertise[]>

}
