import { createConnection, getConnection, getManager } from 'typeorm'
import Doctor from '../../entities/Doctor'
import { IDoctorDTO } from '../../features/doctors/IDoctorDTO'

const connection = {
  async create (): Promise<void> {
    await createConnection()
  },
  async close (): Promise<void> {
    await getConnection().close()
  },
  async clear ():Promise<void> {
    const conn = getConnection()
    const entities = conn.entityMetadatas

    entities.forEach(async (entity) => {
      const repository = conn.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  },

  async createDoctorTest (): Promise<void> {
    const dto: IDoctorDTO = {
      name: 'Ataide',
      cel: '88 99685-4564',
      address: 'Iraucuba',
      crm: '11.2222.33',
      phone: '88 3456-5433',
      zipcode: '86860-000',
      specialties: ''
    }
    const doctor = new Doctor(dto)
    await getManager().save(doctor)
  }

}

export { connection }
