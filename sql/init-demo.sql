/*
Database: MySQL
*/

create table album_table (
    id bigint not null,
    releaseDate bigint,
    rating int,
    title varchar(50),
    year int,
    primary key (id)
) engine=InnoDB default CHARSET=utf8;
