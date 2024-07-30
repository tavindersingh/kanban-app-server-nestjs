import { Board } from 'src/boards/entities/board.entity';
import { TasksColumn } from 'src/tasks-columns/entities/tasks-column.entity';
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
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ name: 'board_id' })
  boardId: number;

  @Column({ name: 'column_id' })
  columnId: number;

  @ManyToOne(() => Board, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @ManyToOne(() => TasksColumn, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'column_id' })
  column: TasksColumn;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
