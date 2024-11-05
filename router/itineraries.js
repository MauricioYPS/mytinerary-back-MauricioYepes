import { Router } from "express";
import { allItineraries, itinerariesByID } from "../controllers/Itineraries/read.js";
import { creat,creatMany } from "../controllers/Itineraries/create..js";
import { updatePhoto, addActivityToItinerary } from "../controllers/Itineraries/update.js";
import { deleteOne } from "../controllers/Itineraries/delete.js";

const router = Router()

router.get('/all', allItineraries)
router.get('/itinerary/:id',itinerariesByID)
router.post('/creat',creat)
router.post('/creatMany', creatMany)
router.put('/update/:id', addActivityToItinerary)
router.put('/updateName/:id', updatePhoto)
router.delete('/delete/:id', deleteOne)
export default router