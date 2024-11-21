import { Router } from "express";
import { allCities, citiesByID } from "../controllers/cities/read.js";
import { creat,creatMany } from "../controllers/cities/create.js";
import { updateAndFindOne, updateName } from "../controllers/cities/update.js";
import { deleteOne } from "../controllers/cities/delete.js";
import validator from "../middlewares/validator.js";
import citySchema from "../schemas/cities/city.js";
import passport from "../middlewares/passport.js";

const router = Router()

router.get('/all',passport.authenticate('jwt', { session: false }),allCities)
router.get('/city/:id',passport.authenticate('jwt', { session: false }),citiesByID)
router.post('/creat',passport.authenticate('jwt', { session: false }),validator(citySchema),creat)
router.post('/creatMany',passport.authenticate('jwt', { session: false }),validator(citySchema), creatMany)
router.put('/update/:id',passport.authenticate('jwt', { session: false }),updateAndFindOne)
router.put('/updateName/:id',passport.authenticate('jwt', { session: false }),updateName)
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),deleteOne)

export default router