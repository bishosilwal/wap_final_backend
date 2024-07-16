import { ConnectionOptions } from "mysql2";

type dbConfigType = {
  db: ConnectionOptions;
  listPerPage: number;
}

const databaseConfig: dbConfigType = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    user: "root",
    password: "root",
    database: "wap_final",
    connectTimeout: 60000,
    timezone: "Z",
  },
  listPerPage: 10,
};
export default databaseConfig;
