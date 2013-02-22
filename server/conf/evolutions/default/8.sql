# UserAndPaymentProfile schema

# --- !Ups

CREATE TABLE UserAndPaymentProfile (
    userId BIGINT (20) NOT NULL,
    paymentProfileId BIGINT (20) NOT NULL
);

# --- !Downs

DROP TABLE UserAndPaymentProfile;