import { Router } from "express";
import { allUsers } from "../controllers/users/read.js";
import { registerMany,register } from "../controllers/users/register.js";
import updateUser  from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";

const router = Router()

router.get('/all', allUsers)
router.post('/register', accountExist,createHash, register)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router