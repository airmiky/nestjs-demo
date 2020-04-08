import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {AppModule} from "../../app.module";

@Module({
    imports:[
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
        forwardRef(() => AppModule),
    ]
})
export class DatabaseModule {
    constructor( private readonly connection:Connection){
    }
}
