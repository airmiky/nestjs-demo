import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from '@nestjs/common';
import {AlbumCreateService} from "../../service/album-create/album-create.service";
import {AlbumDto} from "../../dto/album-dto";
import {Album} from "../../model/album.interface";
import {AlbumUpdateService} from "../../service/album-update/album-update.service";
import {AlbumDeleteService} from "../../service/album-delete/album-delete.service";
import {AlbumListService} from "../../service/album-list/album-list.service";
import {AlbumReadService} from "../../service/album-read/album-read.service";
import {map} from "rxjs/operators";

@Controller('album')
export class AlbumController {

    constructor(private readonly createService: AlbumCreateService,
                private readonly readService: AlbumReadService,
                private readonly updateService: AlbumUpdateService,
                private readonly deleteService: AlbumDeleteService,
                private readonly listService: AlbumListService) {
    }

    @Post()
    create(@Body() albumDto: AlbumDto, @Res() res) {
        const albumObservable = this.createService.createAlbum(albumDto);

        albumObservable.pipe(map(value => value as AlbumDto)).subscribe(value => {
            res.status(HttpStatus.OK).send(value);
            res.end();
        });
    }

    @Get(':id')
    read(@Param('id') id, @Res() res) {
        const albumObservable = this.readService.readAlbum(id);

        albumObservable.pipe(map(value => value as AlbumDto)).subscribe(value => {
            res.status(HttpStatus.OK).send(value);
            res.end();
        });
    }

    @Put(':id')
    update(@Param('id') id, @Body() albumDto: AlbumDto): Album {
        return this.updateService.updateAlbum(id, albumDto);
    }

    @Delete(':id')
    delete(@Param('id') id): void {
        return this.deleteService.deleteAlbum(id);
    }
}

