import { Router } from "express";
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import activitiesRouter from './activities.js'
import userRouter from './users.js'
import routerAuth from './auth.js'

const router = Router()

router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/activities', activitiesRouter)
router.use('/users',userRouter)
router.use('/auth',routerAuth)
export default router