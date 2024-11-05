import  {Router} from 'express'
import {allActivities,activityByID} from '../controllers/activities/read.js'
import {creat,creatMany} from '../controllers/activities/create.js'
import {updateActivity,updateAndFindOne} from '../controllers/activities/update.js'
import deleteOne from '../controllers/activities/delete.js'

const router = Router()

router.get('/all',allActivities)
router.get('/activity/:id',activityByID)
router.post('/creat',creat) 
router.post('/creatMany',creatMany)
router.put('/update/:id',updateAndFindOne)
router.put('/updateName/:id',updateActivity)
router.delete('/delete/:id',deleteOne)

export default router