import { Board } from 'src/boards/entities/board.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TasksColumn extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  color: string;

  @Column({ name: 'board_id' })
  boardId: number;

  @ManyToOne(() => Board, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
