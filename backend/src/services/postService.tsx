import { QueryResult, ResultSetHeader } from "mysql2";
import databaseConfig from "../config/database";
import dbHelper from "../helpers/dataHelper";
import db from "./db";

async function getAll(page = 1) {
  const offset = dbHelper.getOffset(page, databaseConfig.listPerPage);

  const rows = await db.query(
    `SELECT id, title, body, votes, created_at, updated_at
    FROM post ORDER BY created_at desc LIMIT ${offset},${databaseConfig.listPerPage}`
  );
  const data = dbHelper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getById(id: number) {
  try {
    const result: QueryResult = await db.query(
      `SELECT * FROM post WHERE id = "${id}"`
    );
    return result[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function create(params: {title: string, body: string}) {
  try {
      const result: QueryResult = await db.query(
        `INSERT INTO post (title, body, votes, created_at) VALUES("${
          params.title
        }", "${params.body}", 0, '${new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", " ")}')`
      );
      if(result.constructor.name === "ResultSetHeader") {
        return getById(result["insertId"]).then(r => r).catch(e => e);
      }
  } catch (error) {
    console.log(error);
    throw error;
  }
}


async function update(params: {id: number, votes: number}) {
  try {
    const result: QueryResult = await db.query(
      `UPDATE post SET votes=${params.votes} WHERE id=${params.id}`
    )
    if (result.constructor.name === "ResultSetHeader") {
      return getById(params.id)
        .then((r) => r)
        .catch((e) => e);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const postService = {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
}

export default postService;
