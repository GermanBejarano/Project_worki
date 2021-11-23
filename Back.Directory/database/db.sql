CREATE SCHEMA `dbdirectory` ;
USE dbdirectory;

CREATE TABLE `company`(
	id_company INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    nit varchar(100) NOT NULL,
    phone varchar(100) NOT NULL,
    address varchar(100) NOT NULL,
    country varchar(100) NOT NULL,
    region varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
	created datetime,
	updated datetime
);

CREATE TABLE `user`(
	id_user INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nameuser varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    email varchar(100),
    pass varchar(100),
	rol ENUM('admin', 'employee') NOT NULL,
    id_company INT UNSIGNED NOT NULL,
    created datetime,
	updated datetime,
    FOREIGN KEY (id_company) REFERENCES company(id_company)
);


-- COMPANIES
INSERT INTO `dbdirectory`.`company` (`name`,`nit`,`phone`,`address`,`country`,`region`,`email`,`created`,`updated`)
VALUES ('Test S.A.','99821110','7289654','Calle 104','Colombia','Bogota D.C.','testSA@gmail.com', NOW(), null);

INSERT INTO `dbdirectory`.`company` (`name`,`nit`,`phone`,`address`,`country`,`region`,`email`,`created`,`updated`)
VALUES ('Fondo RIM S.A.','9910214-1','5123697','Calle 78','Colombia','Medellin','FondoSA@gmail.com', NOW(), null);

INSERT INTO `dbdirectory`.`company` (`name`,`nit`,`phone`,`address`,`country`,`region`,`email`,`created`,`updated`)
VALUES ('Motos S.A.','7712214-1','2318895','Carrera 7','Colombia','Medellin','Motos.SA@gmail.com', NOW(), null);

-- USERS
INSERT INTO `dbdirectory`.`user`(`nameuser`,`lastname`,`email`,`pass`,`rol`,`id_company`,`created`,`updated`)
VALUES('Daniel','Sanchez','dSanchez@gmail.com','123','employee',1, NOW(), null);

INSERT INTO `dbdirectory`.`user`(`nameuser`,`lastname`,`email`,`pass`,`rol`,`id_company`,`created`,`updated`)
VALUES('Andres','Cabrales','andres18@gmail.com','123','employee',1, NOW(), null);

INSERT INTO `dbdirectory`.`user`(`nameuser`,`lastname`,`email`,`pass`,`rol`,`id_company`,`created`,`updated`)
VALUES('Juliana','Camacho','juli.30@gmail.com','123','employee',2, NOW(), null);
