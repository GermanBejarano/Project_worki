CREATE SCHEMA `dbWorki` ;
USE dbWorki;

-- DROP TABLE user_hobbie;
-- DROP TABLE user;
-- DROP TABLE event;
-- DROP TABLE comment; 
-- DROP TABLE actions;
-- DROP TABLE event;
-- DROP TABLE user_event;

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

CREATE TABLE `company`(
	id_company INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    nit varchar(100),
    phone varchar(100),
    address varchar(100),
	created datetime,
	updated datetime
);

CREATE TABLE `user`(
	id_user INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nameuser varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    email varchar(100),
    pass varchar(100),
	img varchar(1000),
    state text,
    professional_tastes text,
    not_bother boolean,
	rol ENUM('admin', 'employee') NOT NULL,
    status boolean NOT NULL,
	id_position INT UNSIGNED,
    id_company INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_company) REFERENCES company(id_company),
    FOREIGN KEY (id_position) REFERENCES `position`(id_position)
);

CREATE TABLE `user_hobbie`(
	id_user_hobbie INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_user INT UNSIGNED NOT NULL,
	id_hobbie INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_user) REFERENCES user(id_user),
    FOREIGN KEY (id_hobbie) REFERENCES hobbie(id_hobbie)
);

CREATE TABLE `category`(
	id_category INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    created datetime,
	updated datetime
);

CREATE TABLE `post`(
	id_post INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title varchar(100) NOT NULL,
	description varchar(100) NOT NULL,
    status boolean NOT NULL,
	file varchar(1000) NOT NULL,
    id_user INT UNSIGNED NOT NULL,
    id_category INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_user) REFERENCES user(id_user),
    FOREIGN KEY (id_category) REFERENCES category(id_category)
);


CREATE TABLE `comment`(
	id_comment INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	description varchar(100) NOT NULL,
	date datetime NOT NULL,
    status boolean NOT NULL,
    id_post INT UNSIGNED NOT NULL,
	id_user INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_post) REFERENCES post(id_post),
	FOREIGN KEY (id_user) REFERENCES user(id_user)
);

CREATE TABLE `actions`(
	id_actions INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	rol ENUM('like', 'favorite') NOT NULL,
    status boolean NOT NULL,
    id_post INT UNSIGNED NOT NULL,
	id_user INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_post) REFERENCES post(id_post),
	FOREIGN KEY (id_user) REFERENCES user(id_user)
);

CREATE TABLE `event`(
	id_event INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    description varchar(1000) NOT NULL,
    date datetime,
	duration INT NOT NULL,
	place varchar(100) NOT NULL,
    guests varchar(100) NOT NULL,
    status boolean NOT NULL,
    createdby INT NOT NULL,
    created datetime,
	updated datetime
);

CREATE TABLE `user_event`(
	id_user_event INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_user INT UNSIGNED NOT NULL,
	id_event INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_user) REFERENCES user(id_user),
    FOREIGN KEY (id_event) REFERENCES event(id_event)
);

CREATE TABLE `complaint`(
	id_complaint INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    status boolean NOT NULL,
	type ENUM('comment', 'post') NOT NULL,
    id_type INT,
    id_user INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_user) REFERENCES user(id_user)
);


-- POSITIONS
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Desarrollador', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Vendedor', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Administrador', NOW(), null);
INSERT INTO `dbWorki`.`position` (`name`,`created`,`updated`) VALUES('Contador', NOW(), null);

-- HOBBIES
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Dibujar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Escuchar musica', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Viajar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Leer', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Bailar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Ver peliculas', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Ver series', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Cantar', NOW(), null);
INSERT INTO `dbWorki`.`hobbie` (`name`,`created`,`updated`) VALUES('Cocinar', NOW(), null);

-- COMPANY
INSERT INTO `dbWorki`.`company` (`name`,`nit`,`phone`,`address`,`created`,`updated`)
VALUES('Test S.A.','99821110','7289654','Calle 104', NOW(), null);

INSERT INTO `dbWorki`.`company` (`name`,`nit`,`phone`,`address`,`created`,`updated`)
VALUES('Fondo RIM S.A.','9910214-1','5123697','Calle 78', NOW(), null);

INSERT INTO `dbWorki`.`company` (`name`,`nit`,`phone`,`address`,`created`,`updated`)
VALUES('Motos S.A.','7712214-1','2318895','Carrera 7', NOW(), null);

-- CATEGORY
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Comedia', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Moda', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Musica', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Tips', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Retos', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Juegos', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Tutoriales', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Belleza', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Educativo', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Entretenimiento', NOW(), null);
INSERT INTO `dbWorki`.`category`(`name`,`created`,`updated`) VALUES('Publicidad', NOW(), null);


SELECT * FROM `dbWorki`.position;  -- YA
SELECT * FROM `dbWorki`.category; -- YA
SELECT * FROM `dbWorki`.hobbie;   -- YA
SELECT * FROM `dbWorki`.user_hobbie;  
SELECT * FROM `dbWorki`.event;  -- YA
SELECT * FROM `dbWorki`.user_event;
SELECT * FROM `dbWorki`.post;
SELECT * FROM `dbWorki`.comment;
SELECT * FROM `dbWorki`.actions;
SELECT * FROM `dbWorki`.complaint;
SELECT * FROM `dbWorki`.company; -- YA
SELECT * FROM `dbWorki`.user;  -- YA

