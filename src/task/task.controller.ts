import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import {TaskService } from './task.service';


@Controller('task')
export class TaskController {
    constructor(public readonly taskService: TaskService){}
    @Get()
    getAll(){
        return this.taskService.all();
    }
    @Get(':id')
    getOne(@Param('id')id: string){
        return this.taskService.one(id);
    }
    @Post()
    save(@Body() body: TaskEntity){
        return this.taskService.save(body);
    }
    @Put(':id')
    update(@Param('id')id: string, @Body() body: TaskEntity){
        return this.taskService.update(id, body);
    }
    @Delete(':id')
    del(@Param('id')id: string){
        return this.taskService.del(id);
    }
}

