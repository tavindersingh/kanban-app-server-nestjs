import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTasksColumnDto } from './dto/create-tasks-column.dto';
import { TasksColumnsService } from './tasks-columns.service';

@Controller('tasks-columns')
export class TasksColumnsController {
  constructor(private readonly tasksColumnsService: TasksColumnsService) {}

  @Post()
  create(@Body() createTasksColumnDto: CreateTasksColumnDto) {
    return this.tasksColumnsService.create(createTasksColumnDto);
  }

  @Get()
  findAll() {
    return this.tasksColumnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksColumnsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksColumnsService.remove(+id);
  }
}
