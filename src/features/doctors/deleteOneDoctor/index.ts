import { PostgresDoctorRepository } from '../../../repositories/implementations/postgresDoctorRepository'
import { DeleteOneDoctor } from './deleteOneDoctor'
import { DeleteOneDoctorController } from './deleteOneDoctorController'

const postgresDoctorRepository = new PostgresDoctorRepository()
const deleteOneDoctor = new DeleteOneDoctor(postgresDoctorRepository)
const deleteOneDoctorController = new DeleteOneDoctorController(deleteOneDoctor)

export { deleteOneDoctorController }
