import dotenv from 'dotenv';
import type { Knex } from 'knex';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const config: { [key: string]: Knex.Config } = {
  local: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 },
    migrations: {
      tableName: 'knex_migrations2',
      directory: './migrations',
      extension: 'ts',
    },
    searchPath: ['backend2', 'public'], // Ensures backend2 schema
  },
  prod: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      ssl: { rejectUnauthorized: false },
    },
    pool: { min: 2, max: 10 },
    migrations: {
      tableName: 'knex_migrations2',
      directory: './migrations',
      extension: 'ts',
    },
    searchPath: ['backend2', 'public'],
  },
};

export default config;
