create table people(
	id int auto_increment not null,
	name varchar(60),
    gender varchar(12),
    age int(3),
	email varchar(120),
	phone varchar(20),
	
	primary key(id)
);