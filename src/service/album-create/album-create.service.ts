import { Injectable } from '@nestjs/common';
import {AlbumDto} from "../../dto/album.dto";
import {Album} from "../../model/album.interface";
import {InjectRepository} from "@nestjs/typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";

@Injectable()
export class AlbumCreateService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly  repository:Repository<AlbumEntity>){
    }

    createAlbum(albumDto: AlbumDto): Observable<AlbumEntity> {
        console.log("Create Album.. ", albumDto);
        return from(this.repository.save(albumDto));
    }
}

