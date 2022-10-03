import categorySchema from "../schemas/categorySchema.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function validateCategory(req, res, next) {
  const { name } = req.body;

  const validate = categorySchema.validate({ name }, { abortEarly: false });

  if (validate.error) {
    const err = validate.error.details.map((detail) => detail.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(err);
  }

  next();
}
