# Application schema

# --- !Ups

CREATE TABLE Application (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE Application;