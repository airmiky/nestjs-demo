import {Injectable} from '@nestjs/common';
import {Album} from "../../model/album.interface";
import {InjectRepository} from "@nestjs/typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";

@Injectable()
export class AlbumReadService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly  repository:Repository<AlbumEntity>){
    }

    readAlbum(id: string): Observable<AlbumEntity> {
        console.log("Find album..", id);
        return from(this.repository.findOne(id));
    }

/*
    readAlbum(id: string): Album {
        let album: Album = this.findAlbum(id);
        console.log("Find album..", album);

        return album;
    }
*/

    private findAlbum(id: string): Album {
        return {
            id: 1,
            rating: 5,
            releaseDate: 10,
            title: "Mi Soledad",
            year: 1990
        };
    }

}
