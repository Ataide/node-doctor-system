import Doctor from '../entities/Doctor'
import Expertise from '../entities/Expertise'

export interface IDoctorRepository {

  list(): Promise<Doctor[]>
  create(doctor: Doctor): Promise<Doctor>
  findOne(id: number): Promise<Doctor>
  getExpertiseByArrayName(names: string[]): Promise<Expertise[]>

}
