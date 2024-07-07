# JCH HUB

JCH Hub is a web application for storing information about job candidates.

## HOW TO RUN THE APPLICATION

The app uses amono repo approach where the frontend is in the "frontend" folder and backend in the "backend" folder

### Running the backend

- [ ] cd into backend folder and run `yarn install`

  The project uses Prisma ORM for connecting to a postgreSql database.
  please use atool of your choice to create adatabase

- [ ] create a `.env` file and add a DATABASE_URL variable as follows
      `DATABASE_URL="postgresql://<user>:<paswword>@localhost:5432/<database name>?schema=public"`

- [ ] Then run the following prisma commands
      `npx prisma init`
      `npx prisma db push`

  [Check out the docs here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)

- [ ]
