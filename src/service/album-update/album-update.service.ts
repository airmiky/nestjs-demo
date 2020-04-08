import { Injectable } from '@nestjs/common';
import {AlbumDto} from "../../dto/album-dto";
import {Album} from "../../model/album.interface";

@Injectable()
export class AlbumUpdateService {

    updateAlbum(id: string, albumDto: AlbumDto): Album {
        let album: Album = {
            id: 1,
            rating: albumDto.rating,
            releaseDate: albumDto.releaseDate,
            title: albumDto.title,
            year: albumDto.year,
        };

        console.log("Update Album.. ", album);
        return album;
    }

}
