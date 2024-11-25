import { Router } from "express";
import  {allCountries} from "../controllers/countries/read.js";
const router = Router()

router.get('/all',allCountries)

export default router