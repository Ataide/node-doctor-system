import { Router } from 'express'

const DoctorRoutes = Router()

DoctorRoutes.get('/doctors', (request, response) => {
  return response.json({
    message: 'List all Doctors.'
  })
})

DoctorRoutes.post('/doctors', (request, response) => {
  return response.json({
    result: request.body
  })
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
