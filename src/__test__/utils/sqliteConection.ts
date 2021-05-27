import { ConnectionOptions, createConnection, getConnection } from 'typeorm'
import Doctor from '../../entities/Doctor'
const options: ConnectionOptions = {
  type: 'sqlite',
  synchronize: true,
  database: '../database.sqlite',
  entities: [Doctor],
  logging: true
}

const connection = {
  async create (): Promise<void> {
    await createConnection(options)
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
  }

}

export { connection }
