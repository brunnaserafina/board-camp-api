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

export async function getCustomer(req, res) {
  const { id } = req.params;

  try {
    const customer = await connection.query(
      "SELECT * FROM customers WHERE id = ($1);",
      [id]
    );

    if (customer.rows.length === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    return res.status(STATUS_CODE.OK).send(customer.rows[0]);
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
