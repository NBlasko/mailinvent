const Joi = require('joi');

module.exports = {

    validateBody: (schema) => {
        return (req, res, next) => {

            const result = Joi.validate(req.body, schema);
            if (result.error)
                return res.status(400).json({ error: result.error.details[0].message });

            if (!req.value) req.value = {};
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        postSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            description: Joi.string().min(4).max(500).required(),
            name: Joi.string().required().min(3).max(30).required(),
        }),

    }
}