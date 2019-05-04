import { Router } from 'express'
import product from './product'
import auction from './auction'
import user from './user'

const router = Router()

// Add Routes
router.use(product)
router.use(auction)
router.use(user)

export default router
