import { Module } from '@nestjs/common';
import { TasksColumnsService } from './tasks-columns.service';
import { TasksColumnsController } from './tasks-columns.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksColumn } from './entities/tasks-column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksColumn])],
  controllers: [TasksColumnsController],
  providers: [TasksColumnsService],
})
export class TasksColumnsModule {}
