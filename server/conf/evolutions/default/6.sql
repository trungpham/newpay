# AccessCredential schema

# --- !Ups

CREATE TABLE AccessCredential (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    publicKey VARCHAR (255) NOT NULL,
    privateKey VARCHAR (255) NOT NULL,
    applicationId BIGINT (20) NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE AccessCredential;