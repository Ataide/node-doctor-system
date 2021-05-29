import { PostgresDoctorRepository } from '../../../repositories/implementations/postgresDoctorRepository'
import { CreateOneDoctor } from './createOneDoctor'
import { CreateDoctorController } from './createOneDoctorController'

const postgresDoctorRepository = new PostgresDoctorRepository()

const createOneDoctor = new CreateOneDoctor(postgresDoctorRepository)
const createOneDoctorController = new CreateDoctorController(createOneDoctor)

export { createOneDoctorController }
