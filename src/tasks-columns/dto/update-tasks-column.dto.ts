import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksColumnDto } from './create-tasks-column.dto';

export class UpdateTasksColumnDto extends PartialType(CreateTasksColumnDto) {}
