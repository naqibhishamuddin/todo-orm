import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosRepository } from './todos.repository'
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodosService {
  constructor(private repository: TodosRepository) { }

  create(createTodoDto: CreateTodoDto) {
    return this.repository.create(createTodoDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: Todo['id']) {
    return this.findOne(id)
  }

  async update(id: Todo['id'], updateTodoDto: UpdateTodoDto) {
    try {
      await this.repository.findOne(id)
      return this.repository.update(id, updateTodoDto)
    } catch (error) {
      return error
    }
  }

  async remove(id: Todo['id']) {
    try {
      await this.repository.findOne(id)
      return this.repository.remove(id)
    } catch (error) {
      return error
    }
  }
}
