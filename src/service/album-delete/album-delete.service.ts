import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {Repository} from "typeorm";

@Injectable()
export class AlbumDeleteService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly  repository: Repository<AlbumEntity>) {
    }

    deleteAlbum(id: string): void {
        console.log("delete album..",  id);
        this.repository.delete(id);
    }

}
