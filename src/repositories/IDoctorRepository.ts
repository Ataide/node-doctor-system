import Doctor from '../entities/Doctor'

export interface IDoctorRepository {

  list(): Promise<Doctor[]>
  create(doctor: Doctor): Promise<void>

}
