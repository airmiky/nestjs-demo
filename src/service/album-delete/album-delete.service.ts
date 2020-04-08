import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumDeleteService {

    deleteAlbum(id: string): void {
        console.log("delete album..",  id);
    }

}
