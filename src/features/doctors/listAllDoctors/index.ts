import { PostgresDoctorRepository } from '../../../repositories/implementations/postgresDoctorRepository'
import { ListDoctor } from './listDoctor'
import { ListDoctorController } from './listDoctorController'

const postgresRepository = new PostgresDoctorRepository()

const listDoctor = new ListDoctor(postgresRepository)

const listDoctorController = new ListDoctorController(listDoctor)

export { listDoctorController }
