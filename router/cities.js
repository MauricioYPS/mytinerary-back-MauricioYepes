import { Router } from "express";
import { allCities, citiesByID } from "../controllers/cities/read.js";
import { creat,creatMany } from "../controllers/cities/create.js";

const router = Router()

router.get('/all', allCities)
router.get('/city/:id',citiesByID)
router.post('/creat',creat)
router.post('/creatMany', creatMany)
export default router