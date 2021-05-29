import { Request, Response, Router } from 'express'
import { createOneDoctorController } from './createOneDoctor'
import { doctorDeleteAcrtion } from './doctorDeleteAction'
import { findOneDoctorController } from './findOneDoctor'
import { listDoctorController } from './listAllDoctors'
import { updateOneController } from './updateOneDoctor'

const DoctorRoutes = Router()

DoctorRoutes.get('/doctors', (request, response) => {
  return listDoctorController.handler(request, response)
})

DoctorRoutes.get('/doctors/:id', (request, response) => {
  return findOneDoctorController.handler(request, response)
})

DoctorRoutes.post('/doctors', (request: Request, response: Response) => {
  return createOneDoctorController.handler(request, response)
})

DoctorRoutes.put('/doctors/:id', (request, response) => {
  return updateOneController.handler(request, response)
})

DoctorRoutes.delete('/doctors/:id', (request, response) => {
  return doctorDeleteAcrtion(request, response)
})

export { DoctorRoutes }
