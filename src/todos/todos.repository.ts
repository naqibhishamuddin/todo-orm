import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosRepository {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  async create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  async findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: Todo['id']) {
    return this.todoRepository.findOneBy({
      id
    });
  }

  async update(id: Todo['id'], updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: Todo['id']) {
    return this.todoRepository.delete(id);
  }
}
