import customerSchema from "../schemas/customerSchema.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import connection from "../databases/pgsql.js";

export async function validateCreateCustomer(req, res, next) {
  const { name, phone, cpf, birthday } = req.body;

  const validate = customerSchema.validate(
    { name, phone, cpf, birthday },
    { abortEarly: false }
  );

  if (validate.error) {
    const err = validate.error.details.map((detail) => detail.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(err);
  }

  try {
    const existingCpf = (
      await connection.query("SELECT * FROM customers WHERE cpf = $1;", [cpf])
    ).rows[0];

    if (existingCpf) {
      return res.sendStatus(STATUS_CODE.CONFLICT);
    }
  } catch (err) {
    console.error(err);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }

  next();
}
