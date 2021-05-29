import { createConnection, getConnection } from 'typeorm'
import Expertise from '../../entities/Expertise'

const expertiseList = ['Alergologia',
  'Angiologia',
  'Buco maxilo',
  'Cardiologia clínca',
  'Cardiologia infantil',
  'Cirurgia cabeça e pescoço',
  'Cirurgia cardíaca',
  'Cirurgia de tórax']

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

  async populateExpertise (): Promise<void> {
    const conn = getConnection()
    const repository = conn.getRepository(Expertise)
    const dataExists = await repository.find()

    if ((dataExists).length === 0) {
      for (const name of expertiseList) {
        await repository.save({ name: name })
      }
    }
  }

}

export { connection }
