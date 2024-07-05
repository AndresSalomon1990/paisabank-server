PAISABANK - SERVER APP
This is a NodeJs REST API exclusively made for PAISABANK - CLIENT APP (add repo).

It allows creating an user, login in, get cards and transactions.

It uses Turso as a serverless SQLite database.

File structure
.
├── src/
│   ├── controllers
│   ├── db
│   ├── middlewares
│   ├── routes
│   ├── index.ts
│   └── server.ts
└── config files
Main techs
Server
NodeJs v20.15.0
ExpressJs v4.19.2
Typescript v5.5.3
Package manager
npm v10.7.0
Database
Turso
Drizzle ORM v0.31.2
How to use it
If you want to use it for another client app, you can fork the repo and follow this steps, adding the changes you need:

Create your Turso account.
Create your Turso DB and get token and database url. Copy them to a new .env file.
Add the necessary DB schemas.
Run npm run generate to create database .sql files.
Run npm run migrate to migrate database .sql files to Turso.
If everything went ok, you are able to start server with npm run dev.
