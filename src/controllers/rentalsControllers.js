import connection from "../databases/pgsql.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import dayjs from "dayjs";

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

    return res.send(rentals.rows);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function createRental(req, res) {
  const { customerId, gameId, daysRented } = req.body;
  const date = dayjs().format("YYYY-MM-DD HH:mm");

  try {
    const existingCustomer = await connection.query(
      "SELECT * FROM customers WHERE id = $1",
      [customerId]
    );

    if (existingCustomer.rows.length === 0) {
      return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const existingGame = await connection.query(
      "SELECT * FROM games WHERE id = $1;",
      [gameId]
    );

    if (existingGame.rows.length === 0) {
      return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    await connection.query(
      'INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7);',
      [
        customerId,
        gameId,
        date,
        daysRented,
        null,
        game.pricePerDay * daysRented,
        null,
      ]
    );
    return res.sendStatus(STATUS_CODE.CREATED);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
