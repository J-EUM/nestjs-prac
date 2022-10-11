import { Injectable } from '@nestjs/common';
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
}
