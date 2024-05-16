import { Register } from 'src/entities/register.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',

  password:'Abdulla',
  entities: [ Register
  ],
  synchronize: true,
};

export default config;
