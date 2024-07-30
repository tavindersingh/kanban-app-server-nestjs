import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return await this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.tasksRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<boolean> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task data not found');
    }

    const result = await this.tasksRepository.update(task.id, updateTaskDto);

    return !!result.affected;
  }

  async remove(id: number): Promise<boolean> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task data not found');
    }

    const result = await this.tasksRepository.delete(id);

    return !!result.affected;
  }
}
