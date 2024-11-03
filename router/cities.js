import { Router } from "express";
import { allCities, citiesByID } from "../controllers/cities/read.js";
import { creat,creatMany } from "../controllers/cities/create.js";
import { updateAndFindOne, updateName } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";

const router = Router()

router.get('/all', allCities)
router.get('/city/:id',citiesByID)
router.post('/creat',creat)
router.post('/creatMany', creatMany)
router.put('/update/:id', updateAndFindOne)
router.put('/updateName/:id', updateName)
router.delete('/delete/:id', deleteOne)

export default router