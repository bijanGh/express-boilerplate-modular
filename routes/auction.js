import { Router } from 'express'
import AuctionCtrl from '../controllers/auction'

const router = Router()
router.get('/', async (req, res) => {
  res.send('hello bitches')
})

router.get(`/allAuctions`, AuctionCtrl.getAllAuctions)

router.get(`/auction/:auctionId`, AuctionCtrl.getAuction)

router.get(`/auctionBids/:auctionId`, AuctionCtrl.getAuctionBids)

export default router
