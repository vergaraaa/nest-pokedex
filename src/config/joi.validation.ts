import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGO_DB: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(7),
});
