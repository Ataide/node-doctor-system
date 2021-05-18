import { createConnection } from 'typeorm'

console.log(' - 🔭 - Trying to connect to the database.')

createConnection().then(() => {
  console.log(' - 🏬 - Conectado ao Postgres. ')
})
