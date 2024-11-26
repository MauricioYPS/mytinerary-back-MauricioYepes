import { Router } from "express";
import { allUsers, userByID } from "../controllers/users/read.js";
import { registerMany,register } from "../controllers/users/register.js";
import updateUser  from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import validator from "../middlewares/validator.js";
import  registerSchema from "../schemas/users/register.js";
import passport from "../middlewares/passport.js";
import {oneUser} from "../controllers/users/read.js";

const router = Router()

router.get('/all',passport.authenticate('jwt', { session: false }), allUsers)
router.get('/validationToken',passport.authenticate('jwt', { session: false }), oneUser)
router.post('/register',validator(registerSchema), accountExist,createHash, register)
router.put('/update/:id',passport.authenticate('jwt', { session: false }),updateUser)
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),deleteUser)

export default router