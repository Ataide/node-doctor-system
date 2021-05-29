import { PostgresDoctorRepository } from '../../../repositories/implementations/postgresDoctorRepository'
import { FindOneDoctor } from './findOneDoctor'
import { FindOneDoctorController } from './findOneDoctorController'

const postegresRepository = new PostgresDoctorRepository()

const findOneDoctor = new FindOneDoctor(postegresRepository)

const findOneDoctorController = new FindOneDoctorController(findOneDoctor)

export { findOneDoctorController }
