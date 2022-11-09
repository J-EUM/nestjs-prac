import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
    // 보드레포지토리를 서비스에서 사용하기 위해 넣어줌
    constructor(
        @InjectRepository(Board) 
        private boardRepository: BoardRepository,
    ) {
        this.boardRepository = boardRepository;
    }

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;

    //     const board: Board = {
    //         id: uuid(),
    //         title, // title: title
    //         description, // description: description
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board; // 지금 생긴 게시물 정보를 리턴
    // }

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        //return await this.boardRepository.createBoard(createBoardDto);
        const {title, description} = createBoardDto;
        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        });
        await this.boardRepository.save(board);
        return board;
    }

    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne({where: {id: id}});

        if(!found) {
            throw new NotFoundException(`Can't find board with id ${id}`);
        }
        return found;
    }
    // getBoardById(id: string): Board {
    //     const found = this.boards.find( board => board.id === id);
    //     if (!found) {
    //         throw new NotFoundException(); // 괄호안에 메세지 넣으면 기본메세지말고 넣은걸로 나옴
    //     }
    //     return found
    // }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    //     // filter: 조건에 맞는것만 남기는거
    // }

    // updateBoardStatus(id: string, status: BoardStatus ): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board
    // }

}
