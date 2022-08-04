import { signUpSchema,signInSchema } from "../schemas/authSchema.js";

export function signUpValidator(req,res,next){
    const { error } = signUpSchema.validate(req.body,{abortEarly:false});

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}

export function signInValidator(req,res,next){
    const { error } = signInSchema.validate(req.body,{abortEarly:false});

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}