# PaymentProviderToken schema

# --- !Ups

CREATE TABLE PaymentProviderToken (
    id BIGINT (20) NOT NULL AUTO_INCREMENT,
    paymentProfileId BIGINT (20) NOT NULL,
    provider VARCHAR (255),
    token VARCHAR (255),
    PRIMARY KEY (id)
);

# --- !Downs

DROP TABLE PaymentProviderToken;