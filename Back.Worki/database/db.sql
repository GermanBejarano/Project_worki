CREATE SCHEMA `dbWorki` ;
USE dbWorki;

CREATE TABLE `position`(
	id_position INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name  varchar(100) NOT NULL,
	created datetime,
	updated datetime
);

CREATE TABLE `hobbie`(
	id_hobbie INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name  varchar(100) NOT NULL,
	created datetime,
	updated datetime
);

CREATE TABLE `user`(
	id_user INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    email varchar(100),
    pass varchar(100),
	img varchar(1000),
    state text,
    professional_tastes text,
    not_bother boolean,
	rol ENUM('admin', 'employee') NOT NULL,
    id_hobbies INT UNSIGNED,
	id_position INT UNSIGNED,
    id_company INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime
);

INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Desarrollador', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Vendedor', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Administrador', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Contador', NOW(), null);

INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Dibujar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Escuchar musica', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Viajar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Leer', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Bailar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Ver peliculas', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Ver series', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Cantar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Cocinar', NOW(), null);