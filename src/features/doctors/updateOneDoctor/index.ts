import { PostgresDoctorRepository } from '../../../repositories/implementations/postgresDoctorRepository'
import { UpdateOneDoctor } from './updateOneDoctor'
import { UpdateOneController } from './updateOneDoctorController'

const postgresRepository = new PostgresDoctorRepository()

const updateOneDoctor = new UpdateOneDoctor(postgresRepository)

const updateOneController = new UpdateOneController(updateOneDoctor)

export { updateOneController }
