import {sign} from 'jsonwebtoken';

export default  (req,res,next) => {
    const token = sign(
        {email : req.body.email || req.user.email},
    )
}