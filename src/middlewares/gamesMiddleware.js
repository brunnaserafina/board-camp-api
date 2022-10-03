import gameSchema from "../schemas/gameSchema.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import connection from "../databases/pgsql.js";

export async function validateGame(req, res, next) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  const validate = gameSchema.validate(
    { name, image, stockTotal, categoryId, pricePerDay },
    { abortEarly: false }
  );

  if (validate.error) {
    const err = validate.error.details.map((detail) => detail.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(err);
  }

  try {
    const existingGame = (
      await connection.query("SELECT * FROM games WHERE name = $1;", [name])
    ).rows[0];

    if (existingGame) {
      return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    const existingCategory = await connection.query(
      "SELECT * FROM categories WHERE id = $1;",
      [categoryId]
    ).rows[0];

    if (!existingCategory) {
      return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
  next();
}
