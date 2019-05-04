import { Router } from 'express'
import ProductCtrl from '../controllers/product'

const router = Router()

router.get(`/lastWinners/:productId`, ProductCtrl.getLastWinners)

router.get('/product/:productId', ProductCtrl.getProduct)

export default router
