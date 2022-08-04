import { urlSchema } from "../schemas/urlSchema.js";

export default function urlValidator(req,res,next){
    const { error } = urlSchema.validate(req.body);
    
    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}