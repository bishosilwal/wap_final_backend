import mysql from "mysql2/promise"
import databaseConfig from "../config/database"

async function dbQuery(sql, params = "") {
  const connection = await mysql.createConnection(databaseConfig.db);
  const [results] = await connection.execute(sql, params);

  return results;
}

const db = {
  query: dbQuery
}

export default db;
