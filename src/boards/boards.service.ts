import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create(createBoardDto);
    return await this.boardRepository.save(board);
  }

  async findAll(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async findOne(slug: string): Promise<Board> {
    return await this.boardRepository.findOne({ where: { slug } });
  }

  async update(slug: string, updateBoardDto: UpdateBoardDto): Promise<boolean> {
    const board = await this.boardRepository.findOne({ where: { slug } });

    if (!board) {
      throw new NotFoundException('Board data not found');
    }

    const result = await this.boardRepository.update(board.id, updateBoardDto);

    return !!result.affected;
  }

  async remove(slug: string): Promise<boolean> {
    const board = await this.boardRepository.findOne({ where: { slug } });

    if (!board) {
      throw new NotFoundException('Board data not found');
    }

    const result = await this.boardRepository.delete(board.id);

    return !!result.affected;
  }
}
