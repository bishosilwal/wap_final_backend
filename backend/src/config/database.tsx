import { ConnectionOptions } from "mysql2";

type dbConfigType = {
  db: ConnectionOptions;
  listPerPage: number;
};

const databaseConfig: dbConfigType = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectTimeout: 60000,
    timezone: "Z",
  },
  listPerPage: 10,
};
export default databaseConfig;
