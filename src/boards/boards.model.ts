export interface Board { // 타입만 체크할땐 interface, 타입체크랑 인스턴스생성할땐 class
    id: string;
    title: string;
    description: string;
    status: BoardStatus; // PUBLIC이나 PRIVATE만 가능
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}