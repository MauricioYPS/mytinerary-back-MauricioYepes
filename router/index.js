import { Router } from "express";
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import activitiesRouter from './activities.js'

const router = Router()

router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/activities', activitiesRouter)
export default router