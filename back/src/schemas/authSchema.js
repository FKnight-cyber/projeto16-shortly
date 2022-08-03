import joi from 'joi';
export function authSchemaSignUp(req,res,next){

    const authSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmPassword: joi.ref('password')
    });

    const { error } = authSchema.validate(req.body);

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}

export function authSchemaSignIn(req,res,next){
    const authSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const { error } = authSchema.validate(req.body);

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}