import * as dotenv from 'dotenv'
dotenv.config()

export = {
  host: process.env.DB_HOST,
  type: process.env.DB_DIALECT || 'postgres',
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DIALECT ? 'database.sqlite' : process.env.DB_NAME,
  entities: [
    'src/entities/*.ts'
  ],
  migrations: [
    'src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: 'src/database/migrations'
  },
  synchronize: false
};
