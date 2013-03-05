# AccessCredential schema

# --- !Ups

CREATE TABLE AccessCredential (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    clientId VARCHAR (255) NOT NULL,
    secretKey VARCHAR (255) NOT NULL,
    applicationId BIGINT (20) NOT NULL,
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE AccessCredential;