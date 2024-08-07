--table 1--
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name text,
	email text unique not null,
	password text,
	preferred_stocks integer array
);
-- table 2--
create table stocks(
	id serial primary key,
	stock text
);