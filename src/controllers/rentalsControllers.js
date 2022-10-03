import connection from "../databases/pgsql.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function getRentals(req, res) {
  const { customerId, gameId } = req.query;

  try {
    if (customerId && gameId) {
      const rentals = await connection.query(
        `SELECT rentals.*, json_build_object('id', customers.id,'name',customers.name) AS customer, json_build_object('id',games.id,'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) AS game FROM rentals JOIN customers ON rentals."customerId" = customers.id JOIN games ON games.id = rentals."gameId" JOIN categories ON games."categoryId" = categories.id WHERE "customerId" = $1 and "gameId" = $2;
          `,
        [customerId, gameId]
      );
      return res.send(rentals.rows);
    }
    if (customerId) {
      const rentals = await connection.query(
        `SELECT rentals.*, json_build_object('id', customers.id,'name',customers.name) AS customer, json_build_object('id',games.id,'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) AS game FROM rentals JOIN customers ON rentals."customerId" = customers.id JOIN games ON games.id = rentals."gameId" JOIN categories ON games."categoryId" = categories.id WHERE "customerId" = $1;
            `,
        [customerId]
      );
      return res.send(rentals.rows);
    }

    if (gameId) {
      const rentals = await connection.query(
        `SELECT rentals.*, json_build_object('id', customers.id,'name',customers.name) AS customer, json_build_object('id',games.id,'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) AS game FROM rentals JOIN customers ON rentals."customerId" = customers.id JOIN games ON games.id = rentals."gameId" JOIN categories ON games."categoryId" = categories.id WHERE "gameId" = $1;
          `,
        [gameId]
      );
      return res.send(rentals.rows);
    }

    const rentals = await connection.query(
      `SELECT rentals.*, json_build_object('id', customers.id,'name',customers.name) AS customer, json_build_object('id',games.id,'name', games.name, 'categoryId', games."categoryId", 'categoryName', categories.name) AS game FROM rentals JOIN customers ON rentals."customerId" = customers.id JOIN games ON games.id = rentals."gameId" JOIN categories ON games."categoryId" = categories.id;
        `
    );

    res.send(rentals.rows);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
