import { connection } from './utils/sqliteConection'

test('basic', async () => {
  await connection.create()

  expect(true).toBe(true)
})
