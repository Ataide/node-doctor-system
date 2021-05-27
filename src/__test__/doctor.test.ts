import { getRepository } from 'typeorm'
import Doctor from '../entities/Doctor'
import { connection } from './utils/sqliteConection'
import request from 'supertest'
import app from '../app'

describe('Doctor Feature', () => {
  beforeAll(async () => {
    await connection.create()
    await connection.createDoctorTest() // Doctor name = Ataide
  })

  afterAll(async () => {
    await connection.clear()
    await connection.close()
  })

  test('if connection sqlite is ok', async () => {
    const repository = getRepository(Doctor)
    const doctor = await repository.findOne()
    expect(doctor.name).toBe('Ataide')
  })

  test('POST:[ /doctor ] should be able to create a doctor', async () => {
    await request(app).post('/doctors').expect(200)
  })
})
