import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('album_table')
export class AlbumEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    releaseDate: number;

    @Column()
    rating: number;

    @Column()
    title: string;

    @Column()
    year: number;
}
