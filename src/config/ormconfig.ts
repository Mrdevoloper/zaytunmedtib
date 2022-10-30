import path = require('path');
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    password: 'hello',
    port: 5432,
    username:'postgres',
    database: 'helloworld',
    synchronize: false,
    entities:[path.join(__dirname, '..', 'entities', '*.entity.{ts, js}')],
    migrations:[path.join(__dirname, '..', 'migrations', '*.{ts, js}')]
})