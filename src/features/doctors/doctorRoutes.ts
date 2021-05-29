import { Request, Response, Router } from 'express'
import { createOneDoctorController } from './createOneDoctor'
import { findOneDoctorController } from './findOneDoctor'
import { listDoctorController } from './listAllDoctors'

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

DoctorRoutes.put('/doctors', (request, response) => {
  return response.json({
    result: request.body
  })
})

DoctorRoutes.delete('/doctors', (request, response) => {
  return response.json({
    result: request.body
  })
})

export { DoctorRoutes }
