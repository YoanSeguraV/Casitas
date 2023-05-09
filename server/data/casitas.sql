
drop database if exists casitas;
create database casitas;

use casitas;
create table tbl_adminsitradores(
idAdministradores int auto_increment ,
nombre varchar(30),
usuario varchar(35),
contrasena varchar(100),
constraint Pk_id_administradores primary key (idAdministradores)
);

create table tbl_usuarios(
idUsuario  int auto_increment,
nombreUSU varchar(20) ,
fechaNacimientoUSU date,
NroDocumentoUSU float,
fotoPerfilUSU mediumblob,
usuarioUSU varchar(30),
contrasenaUSU varchar(70) ,
constraint PK_ID_USUARIO primary key (idUsuario)

);


create table tbl_casas(
idCasa  int auto_increment,
direccionCAS varchar(70) ,
tipoCAS varchar(20) ,
costoCAS decimal,
NrPisosCAS int,
descripcionCAS varchar(200),
capacidadCAS int,
zonaCAS varchar(20) ,
desactivadaCAS boolean ,
disponibleCAS boolean ,
ocupadaCAS boolean ,
constraint PK_ID_CASA primary key (idCasa)
);

create table tbl_alquiler (
  id_alquiler int auto_increment,
  idusuarioA int,
  idcasaA int,
  Fecha_de_inicio date,
  Valor_del_alquiler decimal,
  estado boolean,
  PRIMARY KEY (id_alquiler),
  CONSTRAINT FK_ID_USUARIO FOREIGN KEY (idusuarioA) REFERENCES tbl_usuarios(idusuario),
  CONSTRAINT FK_ID_CASA FOREIGN KEY (idcasaA) REFERENCES tbl_casas(idcasa)
);

/*insert into tbl_adminsitradores(nombre,usuario,contrasena) values
("felipe","felipesegura250@gmail.com","123456"),
("yoan","sanchez@gmail.com","123445");*/

/*insert into tbl_usuarios(nombreUSU,fechaNacimientoUSU,NroDocumentoUSU,fotoPerfilUSU,usuarioUSU,contrasenaUSU) values
("felipe","2004-05-26",1059234740,"image.png","felipesegura250@gmail.com","123456"),
("yoan","2004-05-27",1059234755,"image2.png","felipe@gmail.com","123456");*/


insert into tbl_casas(direccionCAS,tipoCAS,costoCAS,NrPisosCAS,descripcionCAS,capacidadCAS,zonaCAS,desactivadaCAS,disponibleCAS,ocupadaCAS) values
("calle5c 58-30","cabaña",600.000,2,"cas en muy buen estado contiene internet",5,"sur",0,1,0),
("calle5c 5","casa familiar",900.000,1,"cas en muy buen estado contiene internet",8,"norte",0,0,1);



/*insert into tbl_alquiler(idusuarioA,idcasaA,Fecha_de_inicio,Valor_del_alquiler,estado) values
(1 ,2, "2023-05-10",900.000,1),
(2 ,1, "2023-02-10",600.000,0);

select * from tbl_adminsitradores;
select * from tbl_usuarios;
select * from tbl_casas;
select * from tbl_alquiler;*/


