import connection from "../databases/pgsql.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function getCustomers(req, res) {
  const { cpf } = req.query;

  try {
    if (cpf) {
      const customers = await connection.query(
        "SELECT * FROM customers WHERE cpf LIKE ($1);",
        [cpf]
      );
      return res.status(STATUS_CODE.OK).send(customers.rows);
    }

    const customers = await connection.query("SELECT * FROM customers;");

    return res.status(STATUS_CODE.OK).send(customers.rows);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
