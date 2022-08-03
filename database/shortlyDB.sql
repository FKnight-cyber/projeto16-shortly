CREATE DATABASE "shortly";

CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATE DEFAULT NOW()
);

CREATE TABLE "urls"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "shortUrl" VARCHAR(8) UNIQUE NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INT NOT NULL REFERENCES users(id),
    "visitCount" INT DEFAULT 0,
    CONSTRAINT "proper_url" CHECK
    ( "url" ~* '^https://' ),
    "createdAt" DATE DEFAULT NOW()
);

CREATE TABLE "sessions"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "userId" INT NOT NULL REFERENCES users(id),
    "token" TEXT,
    "createdAt" DATE DEFAULT NOW()
)