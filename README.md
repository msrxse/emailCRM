# emailCRM

This full stack app will include Next.js, TypeScript, Tailwind CSS, ShadCN/ui, a dockerized Postgres DB, Drizzle ORM, [Hono](https://github.com/honojs/middleware/tree/main/packages/auth-js), Zod, [auth.js](https://authjs.dev), react-hook-form, and TanStack Query.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Ensure docker container is started

```
docker start email-crm_drizzle-postgres
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Wireframes:

- Login and onboarding users:
  <img src="assets/emailCRM-wireframes-1.png" width="800" />
- Main Scenes - Campaigns and Contacts
  <img src="assets/emailCRM-wireframes-2.png" width="800" />
- Main Scenes - Performance Dashboard and Settings
  <img src="assets/emailCRM-wireframes-3.png" width="800" />

## Docker DB

- We run our database on a docker container. Using Drizzle and postgreSQL.

### Initial setup

```
docker run --name email-crm_drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

## DB migrations

- We are using a plain postgresql database on a docker container
- Any changes to the schema and you need to create a db migration. Implies generating the SQL migration files based on your Drizzle schema and then applying those changes to your database.

```
pnpm run db:generate
pnpm run db:migrate
```

## How to check postgres database in docker volume

```
docker ps // get container-id from output

<!-- Access the docker container -->
docker exec -it <CONTAINER _ID> bash

<!-- Connect to the postgresql db -->
psql -U <db_user> -d <db_name>

<!-- or all together -->
<!-- docker exec -it {CONTAINER _ID} psql -U {USERNAME} -d {postgres db name} -->
<!-- for example: docker exec -it 6587f794d1ac psql -U postgres -d postgres -->

<!-- Navigate and inspect db -->
\l  // list all dbs

\c // Default connect (to database "postgres" as user "postgres")
\c <DATABASE_NAME> // to connect to a different db

\dt // view tables on current db

postgres=#  // this is the command prompt you should be seeing

<!-- Any SQL allowed now (see data folder for some seeding SQL) -->

SELECT * FROM customers;
SELECT * FROM tickets; // press q to exit

\q // to quit psql

exit // to exit the docker container prompt

```

Notes:

- [See this link for all psql commands](https://tomcam.github.io/postgres/)
