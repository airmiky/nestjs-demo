import {Injectable} from '@nestjs/common';
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
}
