import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title, // title: title
            description, // description: description
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board; // 지금 생긴 게시물 정보를 리턴
    }

    getBoardById(id: string): Board {
        const found = this.boards.find( board => board.id === id);
        if (!found) {
            throw new NotFoundException(); // 괄호안에 메세지 넣으면 기본메세지말고 넣은걸로 나옴
        }
        return found
    }

    deleteBoard(id: string): void {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id);
        // filter: 조건에 맞는것만 남기는거
    }

    updateBoardStatus(id: string, status: BoardStatus ): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board
    }

}
