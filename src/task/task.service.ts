import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        public readonly taskRepository: Repository<TaskEntity>
    ){}
    all(){
        return this.taskRepository.find()
    }
    one(id){
        return this.taskRepository.findOne(id)
    }
    save(body){
        return this.taskRepository.save(body)
    }
    update(id, body){
        return this.taskRepository.update(id, body)
    }
    del(id){
        return this.taskRepository.delete(id)
    }
}
