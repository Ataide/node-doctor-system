import { getRepository } from 'typeorm'
import { connection } from '../utils/sqliteConection'
import request from 'supertest'
import app from '../../app'
import Expertise from '../../entities/Expertise'
import { API_MESSAGES } from '../../utils/messages'
import mockRequests from '../utils/mockRequests'
import Doctor from '../../entities/Doctor'

describe('Doctor Feature', () => {
  beforeAll(async () => {
    await connection.create()
    await connection.populateExpertise()
  })

  afterAll(async () => {
    // await connection.clear()
    await connection.close()
  })

  test('if have expertise Data Table populated', async () => {
    const repo = getRepository(Expertise)
    const expertiseList = await repo.find()
    expect(expertiseList.length).toBeGreaterThanOrEqual(1)
    expect(expertiseList.length).toBeLessThan(10)
  })

  test('POST:[ /doctor ]: should be return 400 when create a doctor with less than 2 expertises', async () => {
    await request(app).post('/doctors').send(mockRequests.mockWithoutExpertises)
      .expect(400)
      .then(response => {
        expect(response.body.message).toBe(API_MESSAGES.MISSING_EXPERTISES)
      })
  })
  test('POST:[ /doctor ]: should be return 400 when create a doctor with big name', async () => {
    const { mockWithNameTooBig } = mockRequests
    const listExpertise = await mockRequests.listExpertises()
    mockWithNameTooBig.expertises = listExpertise
    await request(app).post('/doctors').send(mockWithNameTooBig)
      .expect(400)
      .then(response => {
        expect(response.body.message).toBe(API_MESSAGES.INVALID_NAME)
      })
  })

  test('POST:[ /doctor ] should be able to create a doctor', async () => {
    const { mockWithoutExpertises } = mockRequests
    const listExpertise = await mockRequests.listExpertises()
    mockWithoutExpertises.expertises = listExpertise
    await request(app).post('/doctors').send(mockWithoutExpertises)
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('crm')
        expect(response.body).toHaveProperty('zipcode')
        expect(response.body).toHaveProperty('address')
        expect(response.body).toHaveProperty('phone')
        expect(response.body).toHaveProperty('cel')
        expect(response.body.expertises).toEqual(listExpertise)
        expect(response.body.expertises.length).toBeGreaterThanOrEqual(2)
      })
  })

  test('GET: [ /doctors ]: should return a list of doctors', async () => {
    await request(app).get('/doctors').send().expect(200).then((response) => {
      expect(response.body[0]).toHaveProperty('expertises')
      expect(response.body[0].expertises.length).toBeGreaterThanOrEqual(2)
    })
  })

  test('GET: [ /doctors/:id ]: should return a one doctors by id', async () => {
    const doctor = await getRepository(Doctor).find({ relations: ['expertises'] })
    await request(app).get(`/doctors/${doctor[0].id}`).send().expect(200).then((response) => {
      expect(response.body).toHaveProperty('expertises')
      expect(response.body).toEqual(doctor[0])
    })
  })

  test('PUT: [ /doctors/id ]: should return a updated doctor', async () => {
    const doctor = await getRepository(Doctor).find({ relations: ['expertises'] })
    doctor[1].name = 'Ozzy'
    await request(app).put(`/doctors/${doctor[1].id}`)
      .send(doctor[1])
      .then((response) => {
        expect(response.body.name).toBe('Ozzy')
      })
  })
})
