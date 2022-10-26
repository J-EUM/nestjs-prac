import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn() // id가 프라이머리키라고 알려주는거
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;
}