import  {Router} from 'express'
import {allActivities,activityByID} from '../controllers/activities/read.js'
import {creat,creatMany} from '../controllers/activities/create.js'
import {updateActivity,updateAndFindOne} from '../controllers/activities/update.js'
import deleteOne from '../controllers/activities/delete.js'
import validator from '../middlewares/validator.js'
import activitySchema from '../schemas/activities/activity.js'
import passport from '../middlewares/passport.js'

const router = Router()

router.get('/all',passport.authenticate('jwt', { session: false }),allActivities)
router.get('/activity/:id',passport.authenticate('jwt', { session: false }),activityByID)
router.post('/creat',passport.authenticate('jwt', { session: false }),validator(activitySchema),creat) 
router.post('/creatMany',passport.authenticate('jwt', { session: false }),validator(activitySchema),creatMany)
router.put('/update/:id',passport.authenticate('jwt', { session: false }),updateAndFindOne)
router.put('/updateName/:id',passport.authenticate('jwt', { session: false }),updateActivity)
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),deleteOne)

export default router