import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from "./tasks/tasks.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
