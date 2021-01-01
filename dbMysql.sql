Server version: 8.0.22-0ubuntu0.20.04.3 (Ubuntu)
Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

CREATE DATABASE irriga;

USE irriga;

CREATE TABLE clientes(
    id_cliente int primary key auto_increment,
    nome varchar(150) not null ,
    email varchar(250) not null,
    endereco varchar(250) not null,
    estado varchar(150) not null,
    pais varchar (150) not null,
    contato varchar(150) not null,
    data_cad TIMESTAMP DEFAULT now() ON UPDATE now());
    

CREATE TABLE lavouras(
    id_lavouras int primary key auto_increment,
    nome_lavoura varchar(250) not null,
    hectares varchar(250) not null ,
    lat DECIMAL(10, 8) NOT NULL, 
    lng DECIMAL(11, 8) NOT NULL,
    data_lav TIMESTAMP DEFAULT now() ON UPDATE now(),
    id_cliente int,
    CONSTRAINT foreign key(id_cliente) references clientes(id_cliente)
    ON DELETE CASCADE
    ON UPDATE CASCADE);



