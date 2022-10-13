import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number.parseInt(process.env.TYPEORM_PORT, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + process.env.TYPEORM_TYPEORM_ENTITIES],
    synchronize: true
};