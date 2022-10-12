import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './boards.model';
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
}
