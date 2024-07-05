# PAISABANK - SERVER APP
This is a NodeJs REST API exclusively made for PAISABANK - CLIENT APP (add repo).

It allows creating an user, login in, get cards and transactions.

It uses [Turso](https://turso.tech) as a serverless SQLite database.

## File structure
```
.
├── src/
│   ├── controllers
│   ├── db
│   ├── middlewares
│   ├── routes
│   ├── index.ts
│   └── server.ts
└── config files
```

## Main techs
- Server
	- NodeJs v20.15.0
	- ExpressJs v4.19.2
	- Typescript v5.5.3
- Package manager
	- npm v10.7.0
- Database
	- Turso
	- Drizzle ORM v0.31.2

## How to use it
If you want to use it for another client app, you can fork the repo and follow this steps, adding the changes you need:

1. Create your Turso account.
2. Create your Turso DB and get token and database url. Copy them to a new .env file.
3. Add the necessary DB schemas.
4. Run ``` npm run generate ``` to create database .sql files.
5. Run ``` npm run migrate``` to migrate database .sql files to Turso.
6. If everything went ok, you are able to start server with ``` npm run dev```.
