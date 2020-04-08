import { Injectable } from '@nestjs/common';
import {Album} from "../../model/album.interface";

@Injectable()
export class ArtistDeleteService {

    deleteAArtist(id: string): void {
        console.log("delete album..",  id);
    }

}
