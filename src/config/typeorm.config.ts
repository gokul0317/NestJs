import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '../tasks/task.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'taskmanagment',
  entities: [Task],
  //   entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
