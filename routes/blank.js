import { Router } from 'express'
import BlankCtrl from '../controllers/blank'

const router = Router()
router.get('/', async (req, res) => {
  res.send('hello; today is today, did you know that????!!')
})

router.get(`/blank`, BlankCtrl.sayHi)

export default router
