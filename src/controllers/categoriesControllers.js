import connection from "../databases/pgsql.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function getCategories(req, res) {
  try {
    const categories = await connection.query("SELECT * FROM categories;");

    return res.status(STATUS_CODE.OK).send(categories.rows);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function postCategories(req, res) {
  const { name } = req.body;

  try {
    await connection.query("INSERT INTO categories (name) VALUES ($1);", [
      name,
    ]);

    return res.sendStatus(STATUS_CODE.CREATED);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
