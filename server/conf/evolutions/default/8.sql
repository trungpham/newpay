# PaymentProfileAndUser schema

# --- !Ups

CREATE TABLE PaymentProfileAndUser (
    userId BIGINT (20) NOT NULL,
    paymentProfileId BIGINT (20) NOT NULL
);

# --- !Downs

DROP TABLE PaymentProfileAndUser;