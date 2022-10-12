import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { throws } from 'assert';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        // req.body -> @Body body. body안에 들어있음
        // title만 가져오기: @Body('title') title


        // @Body('title') title: string, 
        // @Body('description') description: string ->dto전

        @Body() createBoardDto: CreateBoardDto
        ): Board {
            return this.boardsService.createBoard(createBoardDto);
    }

    // localhost:3000/boards/asdf234-gjgjh-hbnhvv
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id)
    }

    @Patch('/:id')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ): Board {
        return this.boardsService.updateBoardStatus(id, status)
    }
}
