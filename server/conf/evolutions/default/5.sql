# PaymentProfile schema

# --- !Ups

CREATE TABLE PaymentProfile (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    type VARCHAR (255),
    last4 VARCHAR (255),
    pan VARCHAR (255),
    cardBrand VARCHAR (255),
    expiryMonth VARCHAR (255),
    expiryYear VARCHAR (255),
    fullName VARCHAR (255),
    addressId BIGINT (20),
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE PaymentProfile;