import { Router } from "express";
import  signIn  from "../controllers/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";

const routerAuth = Router()
routerAuth.post('/signIn',accountNotExist,isValidPassword,signIn)

export default routerAuth