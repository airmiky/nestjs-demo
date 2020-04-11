import {Injectable} from '@nestjs/common';
import {AlbumDto} from "../../dto/album.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {AlbumEntity} from "../../model/album-entity";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";

@Injectable()
export class AlbumUpdateService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly  repository: Repository<AlbumEntity>) {
    }

    updateAlbum(id: number, albumDto: AlbumDto): Observable<AlbumEntity> {
        console.log("Update Album.. ", AlbumDto);

        return from(this.repository.update(id, albumDto)
            .then(value => {
                return this.repository.findOne(id)
            }));
    }

}
