import rentalSchema from "../schemas/rentalSchema.js";
import { STATUS_CODE } from "../enums/statusCode.js";

export async function validateRental(req, res, next) {
  const { customerId, gameId, daysRented } = req.body;

  const validate = rentalSchema.validate(
    { customerId, gameId, daysRented },
    { abortEarly: false }
  );

  if (validate.error) {
    const err = validate.error.details.map((detail) => detail.message);
    return res.status(STATUS_CODE.BAD_REQUEST).send(err);
  }

  next();
}
