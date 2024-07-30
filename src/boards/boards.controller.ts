import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.update(slug, updateBoardDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.boardsService.remove(slug);
  }
}
