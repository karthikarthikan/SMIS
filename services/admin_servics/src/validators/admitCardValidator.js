import Joi from "joi";

const baseSchema = {
  id: Joi.number().integer().required(),
  title: Joi.string().required(),
  issueDate: Joi.date().required(),
};

export default {
  getAll: Joi.object({}),
  getOne: Joi.object({ params: Joi.object({ id: baseSchema.id }) }),
  add: Joi.object({ body: Joi.object({ title: baseSchema.title, issueDate: baseSchema.issueDate }) }),
  update: Joi.object({ 
    params: Joi.object({ id: baseSchema.id }),
    body: Joi.object({ title: baseSchema.title.optional(), issueDate: baseSchema.issueDate.optional() })
  }),
  delete: Joi.object({ params: Joi.object({ id: baseSchema.id }) }),
};

