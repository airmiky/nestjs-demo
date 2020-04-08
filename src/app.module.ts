import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AlbumController} from './controller/album/album.controller';
import {ArtistController} from './controller/artist/artist.controller';
import {AlbumCreateService} from './service/album-create/album-create.service';
import {AlbumReadService} from './service/album-read/album-read.service';
import {AlbumUpdateService} from './service/album-update/album-update.service';
import {AlbumDeleteService} from './service/album-delete/album-delete.service';
import {AlbumListService} from './service/album-list/album-list.service';
import {ArtistCreateService} from './service/artist-create/artist-create.service';
import {ArtistDeleteService} from './service/artist-delete/artist-delete.service';
import {ArtistListService} from './service/artist-list/artist-list.service';
import {DatabaseModule} from './modules/database/database.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AlbumEntity} from "./model/album-entity";

@Module({
    imports: [DatabaseModule,
      TypeOrmModule.forFeature([AlbumEntity])
    ],
    controllers: [AppController, AlbumController, ArtistController],
    providers: [AppService, AlbumCreateService, AlbumReadService, AlbumUpdateService, AlbumDeleteService, AlbumListService, ArtistCreateService, ArtistDeleteService, ArtistListService],
})
export class AppModule {
}
