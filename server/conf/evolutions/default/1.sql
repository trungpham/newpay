# Users schema

# --- !Ups

CREATE TABLE User (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE User;