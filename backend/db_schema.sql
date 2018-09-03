DROP DATABASE IF EXISTS  "linkedlist_test";
CREATE DATABASE "linkedlist_test";

DROP DATABASE IF EXISTS  "linkedlist";
CREATE DATABASE "linkedlist";
\c "linkedlist"

CREATE TABLE companies
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  handle TEXT UNIQUE NOT NULL,
  logo TEXT,
  name TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE jobs
(
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL REFERENCES companies(handle) ON DELETE CASCADE,
  equity FLOAT,
  salary TEXT NOT NULL,
  title TEXT NOT NULL
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  current_company TEXT REFERENCES companies (handle) ON DELETE SET NULL,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  password TEXT NOT NULL,
  photo TEXT,
  username TEXT UNIQUE NOT NULL UNIQUE
);

CREATE TABLE jobs_users
(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL REFERENCES users (username) ON DELETE CASCADE,
  job_id INTEGER NOT NULL REFERENCES jobs (id) ON DELETE CASCADE
);


INSERT INTO companies (email, handle, logo, name, password) VALUES ('xyz@yahoo.com', 'xyzcompany', 'https://via.placeholder.com/150x150', 'xyz', '12345');
INSERT INTO companies (email, handle, logo, name, password) VALUES ('abc@yahoo.com', 'abccompany', 'https://via.placeholder.com/150x150', 'abc', '12345');
INSERT INTO companies (email, handle, logo, name, password) VALUES ('def@yahoo.com', 'defcompany', 'https://via.placeholder.com/150x150', 'def', '12345');
INSERT INTO companies (email, handle, logo, name, password) VALUES ('google@yahoo.com', 'google', 'https://via.placeholder.com/150x150', 'Google', '12345');

INSERT INTO users (current_company, email, first_name, last_name, password, photo, username) VALUES ('xyzcompany', 'whatevs@yahoo.com', 'Mary', 'Rocha', '$2b$10$AJz1Y8NEBfsPFLuyuAfcRufZMO456YDt6OjfDD9liV8XRtDor3Lsi', 'https://via.placeholder.com/150x150', 'mary');
INSERT INTO users (current_company, email, first_name, last_name, password, photo, username) VALUES ('abccompany', 'whatevsss@yahoo.com', 'Steve', 'Rocha', '$2b$10$AJz1Y8NEBfsPFLuyuAfcRufZMO456YDt6OjfDD9liV8XRtDor3Lsi', 'https://via.placeholder.com/150x150', 'steve');
INSERT INTO users (email, first_name, last_name, password, photo, username) VALUES ('whatevsss@yahoo.com', 'jason', 'hu', '$2b$10$AJz1Y8NEBfsPFLuyuAfcRufZMO456YDt6OjfDD9liV8XRtDor3Lsi', 'https://via.placeholder.com/150x150', 'jason');
INSERT INTO users (email, first_name, last_name, password, photo, username) VALUES ('test@gmail.com', 'kevin', 'qi', '$2b$10$AJz1Y8NEBfsPFLuyuAfcRufZMO456YDt6OjfDD9liV8XRtDor3Lsi', 'https://i1.wp.com/lovecuteanimals.com/wp-content/uploads/2017/06/1497520947_298_cute-baby-animals.jpg', 'kevin');

INSERT INTO jobs (company, equity, salary, title) VALUES ('xyzcompany', 4.5, '75000', 'Secretary');
INSERT INTO jobs (company, equity, salary, title) VALUES ('xyzcompany', 2.5, '175000', 'Executive Secretary');

INSERT INTO jobs_users (username, job_id) VALUES ('mary', 1);
INSERT INTO jobs_users (username, job_id) VALUES ('steve', 1);


\q
