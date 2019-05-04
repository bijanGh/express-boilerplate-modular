import { Router } from 'express'
import UserCtrl from '../controllers/user'

const router = Router()

router.get(`/cart/defaultAddress/:userId`, UserCtrl.getDefaultMailingAddress)

router.get('/cart/allAddresses/:userId', UserCtrl.getMailingAddresses)

export default router
