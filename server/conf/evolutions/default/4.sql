# Address schema

# --- !Ups

CREATE TABLE Address (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    type VARCHAR (255) NOT NULL,
    phone VARCHAR (255),
    fullName VARCHAR (255),
    line1 VARCHAR (255),
    line2 VARCHAR (255),
    line3 VARCHAR (255),
    city VARCHAR (255),
    stateProvinceRegion VARCHAR (255),
    stateProvinceRegionCode VARCHAR (255),
    postalCode VARCHAR (255),
    countryCode VARCHAR (255),
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE Address;