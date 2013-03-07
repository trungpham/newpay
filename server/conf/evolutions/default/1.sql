# Users schema

# --- !Ups

CREATE TABLE User (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    firstName varchar (255),
    lastName varchar (255),
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE User;