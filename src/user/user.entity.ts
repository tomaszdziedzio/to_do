import {Column, Entity, PrimaryGeneratedColumn} from 'TypeOrm';

@Entity('user') 
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", width: 50})
    name: string;
    @Column({type: "varchar", width: 255, unique: true})
    mail: string;
    @Column({type: "varchar", width: 100})
    password: string;
    @Column({type: "varchar", width: 20})
    role: string;
}