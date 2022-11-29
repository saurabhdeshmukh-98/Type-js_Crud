import express from 'express'
const router = express.Router()

import { add, fetch, fetchOne, removeOne, update } from '../controller/studController'


router.post('/saveData', add)
router.get('/findData', fetchOne)
router.get('/getallRecords', fetch)
router.delete('/deleteOnerecord:/name', removeOne)
router.put('/modify', update)

export {
    router
}