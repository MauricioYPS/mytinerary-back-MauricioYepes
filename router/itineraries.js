import { Router } from "express";
import { allItineraries, itinerariesByID, itinerariesByCity } from "../controllers/Itineraries/read.js";
import { creat,creatMany } from "../controllers/Itineraries/create.js";
import { updatePhoto,updateAndFindOne  } from "../controllers/Itineraries/update.js";
import { deleteOne } from "../controllers/Itineraries/delete.js";
import validator from "../middlewares/validator.js";
import itinerarySchema from "../schemas/itineraries/itinerary.js";
import passport from "../middlewares/passport.js";

const router = Router()

router.get('/all',passport.authenticate('jwt', { session: false }),allItineraries)
router.get('/itinerary/:id',passport.authenticate('jwt', { session: false }),itinerariesByID)
router.get('/itineraryCity/:city',itinerariesByCity)
router.post('/creat',passport.authenticate('jwt', { session: false }),validator(itinerarySchema),creat)
router.post('/creatMany',passport.authenticate('jwt', { session: false }),validator(itinerarySchema), creatMany)
router.put('/update/:id',passport.authenticate('jwt', { session: false }),updateAndFindOne) 
router.put('/updateName/:id',passport.authenticate('jwt', { session: false }),updatePhoto)
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),deleteOne)
export default router