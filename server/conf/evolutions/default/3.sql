# Customer schema

# --- !Ups

CREATE TABLE Customer (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    applicationId BIGINT (20) NOT NULL,
    externalId VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE Customer;