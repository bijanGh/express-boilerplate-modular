import fakerData from '../static/fakerDataModel'
// import { prisma } from '../generated/prisma-client'
import faker from 'faker'
import _ from 'lodash'

const getAllAuctions = async (req, res) => {
  // const q = 'query{auctions{id}}'
  if (!process.env.DATA_TEST) {
    // await prisma.$graphql(q).then(result => res.json(result))
  } else {
    await res.send(_.orderBy(fakerData.auctions, 'auctionStartTime', 'desc'))
  }
}

const getAuction = async (req, res) => {
  // const q = 'query{auctions{id}}'
  if (!process.env.DATA_TEST) {
    // await prisma.$graphql(q).then(result => res.json(result))
  } else {
    await res.send(fakerData.auctionById(faker.random.number(2)))
  }
}

const getAuctionBids = async (req, res) => {
  // const q = 'query{auctions{id}}'
  if (!process.env.DATA_TEST) {
    // await prisma.$graphql(q).then(result => res.json(result))
  } else {
    await res.send(
      _.orderBy(fakerData.productLastWinners, 'createdAt', 'desc')
      // null
    )
  }
}
export default { getAllAuctions, getAuction, getAuctionBids }
