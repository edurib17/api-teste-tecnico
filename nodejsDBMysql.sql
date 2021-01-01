CREATE DATABASE irriga;

USE irriga;

CREATE TABLE clientes(
    id_cliente int primary key auto_increment,
    nome varchar(150) not null ,
    email varchar(250) not null,
    endereco varchar(250) not null,
    estado varchar(150) not null,
    pais varchar (150) not null,
    contato varchar(150) not null);

CREATE TABLE lavouras (
...    
