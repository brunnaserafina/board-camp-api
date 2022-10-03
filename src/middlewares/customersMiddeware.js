import customerSchema from "../schemas/customerSchema.js";
import { STATUS_CODE } from "../enums/statusCode.js";

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

  next();
}
