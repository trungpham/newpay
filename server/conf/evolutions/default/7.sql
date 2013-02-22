# CustomerAndPaymentProfile schema

# --- !Ups

CREATE TABLE CustomerAndPaymentProfile (
    customerId BIGINT (20) NOT NULL,
    paymentProfileId BIGINT (20) NOT NULL
);

# --- !Downs

DROP TABLE CustomerAndPaymentProfile;