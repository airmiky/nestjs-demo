import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {AppModule} from "../../app.module";
import {ConfigService} from "nestjs-config";

@Module({
    imports:[
/*
        TypeOrmModule.forRoot({
            type: 'mysql',// type database
            host:'localhost',//server  database
            port:3306, // port the database
            username:'root', //user database
            password: 'root',
            database:'nestdb',
            entities:[
                AlbumEntity
            ],
            synchronize:true
        }),
*/
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) => ({
                type: 'mysql',
                host: config.get("databaseprop.host"),
                port: config.get("databaseprop.port"),
                username: config.get("databaseprop.username"),
                password: config.get("databaseprop.password"),
                database: config.get("databaseprop.database"),
                entities: [AlbumEntity],
                logging: true,
                synchronize:true
            }),
            inject: [ConfigService],
        }),
        forwardRef(() => AppModule),
    ]
})
export class DatabaseModule {
    constructor( private readonly connection:Connection){
    }
}
