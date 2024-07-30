import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTasksColumnDto } from './dto/create-tasks-column.dto';
import { TasksColumn } from './entities/tasks-column.entity';

@Injectable()
export class TasksColumnsService {
  constructor(
    @InjectRepository(TasksColumn)
    private tasksColumnRepository: Repository<TasksColumn>,
  ) {}

  async create(
    createTasksColumnDto: CreateTasksColumnDto,
  ): Promise<TasksColumn> {
    const tasksColumn = this.tasksColumnRepository.create(createTasksColumnDto);
    return await this.tasksColumnRepository.save(tasksColumn);
  }

  async findAll(): Promise<TasksColumn[]> {
    return await this.tasksColumnRepository.find();
  }

  async findOne(id: number): Promise<TasksColumn> {
    return await this.tasksColumnRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<boolean> {
    const tasksColumn = await this.findOne(id);

    if (!tasksColumn) {
      throw new NotFoundException('Tasks column data not found');
    }

    const result = await this.tasksColumnRepository.delete(id);

    return !!result.affected;
  }
}
