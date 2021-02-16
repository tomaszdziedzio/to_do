import {Entity, Column, PrimaryGeneratedColumn} from 'TypeOrm';

@Entity('task')
export class TaskEntity {
@PrimaryGeneratedColumn()
id: number;
@Column({type: "varchar", width: 50})
title: string;
@Column({type: "text"})
description: string;
@Column({type: "datetime"})
date_start: number;
@Column({type: "datetime"})
date_end: number;
@Column({type: "int"})
user_id: number;



}