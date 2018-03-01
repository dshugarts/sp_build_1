CREATE TABLE users (
	user_id serial primary key,
	username varchar(25),
	birth_date date
);

CREATE TABLE health_data (
	hd_id serial primary key,
	user_id INT REFERENCES users ON DELETE CASCADE,
	height DECIMAL(4,2),
	weight DECIMAL(4,1),
	bmi DECIMAL(4,2),
	pbf DECIMAL(4,2),
	systolic INT,
	diastolic INT,
	tc INT,
	hdl INT,
	ldl INT,
	glu INT,
	trigs INT,
	crp INT,
	nic BOOLEAN,
	vo2 DECIMAL(4,2),
	waist DECIMAL(3,1)
);