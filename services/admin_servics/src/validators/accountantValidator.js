import Joi from "joi";

const baseSchema = {
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
};

export default {
  getAll: Joi.object({}),
  getOne: Joi.object({ params: Joi.object({ id: baseSchema.id }) }),
  add: Joi.object({ body: Joi.object({ name: baseSchema.name, email: baseSchema.email }) }),
  update: Joi.object({ 
    params: Joi.object({ id: baseSchema.id }),
    body: Joi.object({ name: baseSchema.name.optional(), email: baseSchema.email.optional() })
  }),
  delete: Joi.object({ params: Joi.object({ id: baseSchema.id }) }),
};
