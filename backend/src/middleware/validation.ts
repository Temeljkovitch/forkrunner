import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    response.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string!"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string!"),
  body("city").isString().notEmpty().withMessage("City must be a string!"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("Country must be a string!"),
  handleValidationErrors,
];
